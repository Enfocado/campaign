const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1', '127.0.0.2'], keyspace: 'campaign' });


const getAboutSections = (projectId, callback) => {
  const query = 'SELECT * FROM abouts_by_project_id WHERE project_id = ?';
  client.execute(query, [projectId],{ hints : ['int'] }, (err, results) =>{
  	callback(err, results);
  });

};

const postNewAbout = (projectId, params) => {
	const query = 'INSERT INTO abouts_by_project_id(section_id, section_type, content) WHERE project_id = ?';
  client.execute(query, [projectId],{ hints : ['int'] }, (err, results) =>{
  	callback(err, results);
  });

};

const editAbout = (projectId, params, callback) => {

};

const getTiers = (projectId, callback) => {
  const query = 'SELECT * FROM tiers_by_project_id WHERE project_id = ?';
  client.execute(query, [projectId],{ hints : ['int'] }, (err, results) =>{
  	callback(err, results);
  });
};

const deleteTier = (projectId, pledgeId, callback) => {
  const query = 'DELETE FROM tiers_by_project_id WHERE project_id = ? IF EXISTS';
  client.execute(query, [projectId],{ hints : ['int'] }, (err, results) =>{
  	callback(err, results);
  });
};

module.exports = {
	getAboutSections,
	postNewAboutSection,
	editAbout,
	getTiers,
	deleteTier
}
