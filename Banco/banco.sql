DROP DATABASE IF EXISTS orgueduMain;
CREATE DATABASE orgueduMain;
USE orgueduMain;


CREATE TABLE user(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(60) NOT NULL,
    creation_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ativo tinyint NOT NULL DEFAULT '0',
    adm tinyint NOT NULL DEFAULT '0',
    PRIMARY KEY(id)
);


CREATE TABLE note(
    id int NOT NULL AUTO_INCREMENT,
    text text NOT NULL,
    user_id int NOT NULL,
    date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    KEY fk_note_user_id (user_id),
    CONSTRAINT fk_note_user FOREIGN KEY (user_id) REFERENCES user (id)
);
