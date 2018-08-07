CREATE  KEYSPACE campaign 
WITH REPLICATION = { 
  'class' : 'SimpleStrategy', 
  'replication_factor' : 3 
};

CREATE TABLE IF NOT EXISTS campaign.tiers_by_project_id ( 
	project_id int,
	project_name VARCHAR,
	tier_id int, 
	reward VARCHAR,
	description TEXT,
	base_pledge_amount int,
	delivery_date DATE,
	ship_to VARCHAR,
	max_backers int,
  PRIMARY KEY (project_id, base_pledge_amount, tier_id)
)WITH CLUSTERING ORDER BY (base_pledge_amount ASC);


CREATE TABLE IF NOT EXISTS campaign.abouts_by_project_id ( 
	project_id int,
	section_id int, 
	section_type VARCHAR,
	content TEXT,
  PRIMARY KEY (project_id, section_id)
)WITH CLUSTERING ORDER BY (section_id ASC);

CREATE TABLE IF NOT EXISTS campaign.pledges_by_project_and_tier_id (
	pledge_id int,
	project_id int,
	tier_id int,
	user_id int,
	pledge_amount int,
	ship_to VARCHAR,
	created_at int,
	PRIMARY KEY((project_id,tier_id), pledge_id, user_id)
) WITH CLUSTERING ORDER BY (pledge_id DESC, user_id DESC);

CREATE TABLE IF NOT EXISTS campaign.pledge_counts (
  count counter,
  project_id int,
  tier_id int,
  PRIMARY KEY (project_id, tier_id)
);
