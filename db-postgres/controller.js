const db = require('../db/index');


const getAboutContents = (projectId, callback) => {

	let query = 'SELECT * FROM abouts a INNER JOIN projects p ON a.project_id = p.id WHERE p.id = ' + projectId;

	client.query(query, (err, res) => {
		callback(err, res);
		client.end();
	});

};

const getTiers = (projectId, callback) => {

	let query = 'SELECT * FROM tiers t INNER JOIN projects p ON t.project_id = p.id WHERE p.id = ' + projectId;

	client.query(query, (err, res) => {
		callback(err, res);
		client.end();
	});

};

const getPledgeCount = (tierId, callback) => {

	let query = 'SELECT count(id) FROM pledges p INNER JOIN tiers t ON p.tier_id = t.id WHERE t.id = ' + tierId;

	client.query(query, (err, res) => {
		callback(err, res);
		client.end();
	});

}

const postNewPledge = (projectId, {tierId, userId, pledgeAmount, shipTo}) => {

	let query = 'INSERT INTO pledges (tier_id, user_id, pledge_amount, ship_to) VALUES ($1, $2, $3, $4)';
	let values = [tierId, userId, pledgeAmount, shipTo];

	client.query(query, values, (err, res) => {
		callback(err, res);
		client.end();
	})
};

const editTiers = (projectId, params, callback) => {

	//

};

const deletePledge = (projectId, pledgeId, callback) => {

	let query = 'DELETE * FROM pledges WHERE project_id = $1 AND id = $2';
	let values = [projectId, pledgeId];

	client.query(query, values, (err, res) => {
		callback(err, res);
		client.end();
	});
};

module.exports = {
	getAboutContents,
	getTiers,
	postNewPledge,
	editTiers,
	deletePledge
}
