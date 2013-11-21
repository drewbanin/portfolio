CREATE DATABASE life;
USE life;

DROP TABLE IF EXISTS Metrics;
CREATE TABLE Metrics 
(
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY(id),
    typeId INT,
    eventDate DATE,
    value VARCHAR(140)
);

DROP TABLE IF EXISTS MetricTypes;
CREATE TABLE MetricTypes
(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    label VARCHAR(140),
    isNumeric INT,
    unitId INT
);

DROP TABLE IF EXISTS MetricUnits;
CREATE Table MetricUnits
(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    label VARCHAR(140)
);
