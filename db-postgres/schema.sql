-- CREATE TABLE projects (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(50)
-- );

-- COPY projects (name) FROM '/Users/administrator/Documents/GitHub/Igniter/campaign/mock-data/projects.csv' DELIMITER ',' CSV HEADER;
-- CREATE INDEX project_id_idx ON projects USING btree(name);

CREATE TABLE abouts (
	id SERIAL PRIMARY KEY,
	project_id INTEGER,
	section_type VARCHAR(20),
	content TEXT
);

COPY abouts (project_id, section_type, content) FROM '/Users/administrator/Documents/GitHub/Igniter/campaign/mock-data/abouts.csv' DELIMITER ',' CSV HEADER;
ALTER TABLE campaign.abouts ADD FOREIGN KEY (project_id) REFERENCES campaign.projects(id);
CREATE INDEX project_id_abouts_b_idx ON abouts USING btree(project_id);


-- CREATE TABLE tiers (
--   id SERIAL PRIMARY KEY,
--   project_id INTEGER,
--   reward VARCHAR (100),
--   description TEXT,
--   base_pledge_amount INTEGER,
--   delivery_date DATE,
--   ship_to VARCHAR (50),
--   max_backers INTEGER
-- );

-- COPY tiers (project_id, reward, description, base_pledge_amount, delivery_date, ship_to, max_backers) FROM '/Users/administrator/Documents/GitHub/Igniter/campaign/mock-data/tiers.csv' DELIMITER ',' CSV HEADER;
-- ALTER TABLE campaign.tiers ADD FOREIGN KEY (project_id) REFERENCES campaign.projects(id);
-- CREATE INDEX project_id_tiers_b_idx ON tiers USING btree(project_id);


-- CREATE TABLE pledges (
--   id SERIAL PRIMARY KEY, 
--   tier_id INTEGER,
--   user_id INTEGER,
--   pledge_amount INTEGER,
--   ship_to VARCHAR(8)
-- );

-- COPY pledges (tier_id, user_id, pledge_amount, ship_to) FROM '/Users/administrator/Documents/GitHub/Igniter/campaign/mock-data/pledges.csv' DELIMITER ',' CSV HEADER;
-- ALTER TABLE campaign.pledges ADD FOREIGN KEY (tier_id) REFERENCES campaign.tiers(id);
-- CREATE INDEX tier_id_idx ON pledges USING btree(tier_id);
