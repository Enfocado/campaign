# Campaign Service for Igniter


## API endpoints required by client-side features

* GET /projects/:projectId/campaign/tiers

```
{ 
	project_id: INT,
	tiers: 
	[
		{
			tier_id:  INT,
			reward:  STRING,
			reward_description: STRING,
			base_pledge_amount: INT,
			delivery_date: DATE,
			ship_to: STRING,
			reward_quantity: INT,
			backers_count: INT
		}
	]
}
```

* GET /projects/:projectId/campaign/about

```
{
	project_id: INT,
	project_name: INT,
	about: 
	[
		{
			section_id: INT,
			section_header: STRING,
			section_content: STRING,
			section_photo: STRING
		}
	]
}
```


## Extended CRUD operations

* POST /projects/:projectId/campaign/pledges/new

```
{
	project_id: INT,
	user_id: INT,
	tier_id: INT,
	pledge_amount: INT,
	shipping_destination: STRING
}
```

* PUT /projects/:projectId/campaign/tiers/:tierId

```
{
	project_id: INT,
	tier_id: INT,
	reward: STRING,
	reward_description: STRING,
	base_pledge_amount: INT,
	delivery_date: DATE,
	ship_to: STRING,
	reward_quantity: INT,
	backers_count: INT
}
```

* DELETE /projects/:projectId/campaign/pledges/:pledgeId
