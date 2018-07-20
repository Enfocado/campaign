DROP DATABASE IF EXISTS campaign;

CREATE DATABASE campaign;

USE campaign;
		
CREATE TABLE product (
  id INTEGER NOT NULL AUTO_INCREMENT,
  risk_n_challenges TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE offered_tiers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  base_amount INTEGER,
  title VARCHAR (250),
  description MEDIUMTEXT,
  delivery_date DATE,
  ships_to VARCHAR(50),
  max_backers INTEGER,
  id_product INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (id_product) REFERENCES product(id)
);

CREATE TABLE about (
  id INTEGER NOT NULL AUTO_INCREMENT,
  ele_type TEXT,
  ele_description TEXT,
  id_product INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (id_product) REFERENCES product(id)
);

/*  
 *  mysql -u root -p < schema.sql
*/