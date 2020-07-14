DROP DATABASE IF EXISTS  burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO INCREMENT,
    burger_name VARCHAR(80),
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

SELECT * FROM burgers;