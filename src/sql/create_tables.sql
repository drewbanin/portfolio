USE life;

CREATE TABLE Metrics 
(
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY(id),
    typeId INT,
    eventDate DATE,
    value VARCHAR(140)
);

CREATE TABLE MetricTypes
(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    label VARCHAR(140),
    isNumeric INT,
    unitId INT
);

CREATE Table MetricUnits
(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    label VARCHAR(140)
);
