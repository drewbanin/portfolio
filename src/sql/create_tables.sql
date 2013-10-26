USE life;

CREATE TABLE Metrics 
(
    ID INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY(ID),
    TypeID INT,
    EventDate DATE,
    Value VARCHAR(140)
);

CREATE TABLE MetricTypes
(
    ID INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(ID),
    Label VARCHAR(140),
    IsNumeric BIT,
    UnitId INT
);

CREATE Table MetricUnits
(
    ID INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(ID),
    Label VARCHAR(140)
);
