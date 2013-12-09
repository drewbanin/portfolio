#!/usr/bin/env python

import MySQLdb as mysql
import datetime
import random
from collections import OrderedDict

CREDENTIALS = ("localhost", "root", "password", "life")

class DBMapper(object):
  def __init__(self, host, user, password, db):
    self.db = mysql.connect(host, user, password, db)
    self.cursor = self.db.cursor()

  def insertMetric(self, date, metricType, value):
    dateStr = self.toSqlDate(date)
    vals = (metricType, dateStr, value)
    result = self.cursor.execute("INSERT INTO Metrics (typeId, eventDate, value) VALUES (%s, %s, %s)", vals)
    self.db.commit()

  def getMetricsForDate(self, date):
    dateStr = self.toSqlDate(date)
    self.cursor.execute("SELECT * FROM Metrics WHERE `eventDate` = %s", dateStr)
    return self.cursor.fetchall()

  def truncateMetricsTable(self):
    self.cursor.execute("TRUNCATE TABLE Metrics");

  @classmethod
  def toSqlDate(cls, datetimeObj):
    return datetimeObj.strftime('%Y-%m-%d')

  def close(self):
    self.cursor.close()
    self.db.close()

class DataGenerator(object):
  # Other considerations:
  #  - Day of week?
  MetricTypeRange = OrderedDict([
      ("coffee", (0, 5)),
      ("sleep", (3, 8)),
      ("tiredness", (1, 5)),
      ("happiness", (1, 5)),
      ("temperature", (32, 52)),
      ("money", (0, 100)),
      ("exercise", (0, 120)),
      ("reading", (0, 40)),
      ("food", (1500, 3000)),
      ("work", (7*60, 12*60)),
      ("leisure", (0, 4*60)),
  ])

  def __init__(self, fromDate, toDate):
    self.fromDate = fromDate
    self.toDate = toDate
    self.mapper = DBMapper(*CREDENTIALS)

  def getMetricIdFromMetricName(self, metricName):
    return self.MetricTypeRange.keys().index(metricName) + 1

  def genFakeData(self):
    self.mapper.truncateMetricsTable()
    dateSpan = self.toDate - self.fromDate
    for daysSinceStart in range(dateSpan.days):
      curDate = self.fromDate + self.numDays(daysSinceStart)
      print curDate
      for metric in self.MetricTypeRange:
        val = self.getValueForMetric(metric)
        metricId = self.getMetricIdFromMetricName(metric)
        print "  %s (%d) - %d" % (metric, metricId, val)
        self.mapper.insertMetric(curDate, metricId, val)

  def getValueForMetric(self, metricName):
    validRange = self.MetricTypeRange[metricName]
    value = random.randint(validRange[0], validRange[1])
    return value

  def numDays(self, num):
    return datetime.timedelta(days=num)

if __name__ == "__main__":
  today = datetime.datetime.now()
  lastMonth = today - datetime.timedelta(days=30)
  gen = DataGenerator(lastMonth, today)
  gen.genFakeData()
