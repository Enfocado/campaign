DROP DATABASE IF EXISTS campaign;

CREATE DATABASE campaign;

USE campaign;
		
CREATE TABLE project (
  id INTEGER NOT NULL AUTO_INCREMENT,
  risk_n_challenges TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE offered_tiers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  base_amount INTEGER,
  title VARCHAR (250),
  description TEXT,
  delivery_date DATE,
  ships_to VARCHAR(50),
  max_backers INTEGER,
  project_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES project(id)
);

CREATE TABLE ele_type (
  id INTEGER NOT NULL AUTO_INCREMENT,
  type_description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE about_components (
  id INTEGER NOT NULL AUTO_INCREMENT,
  ele_type_id INTEGER,
  ele_description TEXT,
  project_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES project(id),
  FOREIGN KEY (ele_type_id) REFERENCES ele_type(id)
);

CREATE TABLE user_tiers (
  id INTEGER NOT NULL AUTO_INCREMENT,
  project_id INTEGER,
  tier_id INTEGER,
  tier_amount INTEGER,
  shipping_destination VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES project(id),
  FOREIGN KEY (tier_id) REFERENCES offered_tiers(id)
);

/*  
 *  mysql -u root -p < schema.sql
*/
