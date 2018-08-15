CREATE TABLE projects (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

COPY projects (name) FROM '/Users/administrator/Documents/GitHub/Igniter/campaign/mock-data/projects.csv' DELIMITER ',' CSV HEADER;

CREATE TABLE abouts (
	id SERIAL PRIMARY KEY,
	project_id INT,
	section_type VARCHAR(20),
	content TEXT
);

COPY abouts (project_id, section_type, content) FROM '/Users/administrator/Documents/GitHub/Igniter/campaign/mock-data/abouts.csv' DELIMITER ',' CSV HEADER;


CREATE TABLE tiers (
  id SERIAL PRIMARY KEY,
  project_id INT,
  reward VARCHAR (100),
  description TEXT,
  base_pledge_amount INT,
  delivery_date DATE,
  ship_to VARCHAR (50),
  max_backers INT
);

COPY tiers (project_id, reward, description, base_pledge_amount, delivery_date, ship_to, max_backers) FROM '/Users/administrator/Documents/GitHub/Igniter/campaign/mock-data/tiers.csv' DELIMITER ',' CSV HEADER;
