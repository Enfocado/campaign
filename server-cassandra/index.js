const express = require('express');
const Log = require('log');
const db = require('../db-cassandra/index');

const app = express();
const port = process.env.PORT || 3002;

const log = new Log('info');

app.use(express.static('client/dist'));

app.listen(port, () => console.log('listening'))

//API SUPPORTING CURRENT FRONT_END FEATURES
app.get('/api/projects/:projectId/campaign/tiers', (req, res) => {
  //return tier info
	db.getTiers(req.params.projectId, (err, results) => {

		if(err) {
			log.error(err);
		} else {
			res.send(results);
		}
	});
})

app.get('/api/projects/:projectId/campaign/details', (req, res) => {
  //return about headings and sections content
  db.getAboutSections(req.params.projectId, (err, results) =>{
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})


//not yet hooked up
app.post('/api/projects/:projectId/campaign/details/new', (req, res) => {
  db.postNewAboutSection(req.params.projectId, req.body, (err, results) => {
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})


//EXTENDED CRUD API
app.put('/projects/:projectId/campaign/details/:tierId', (req, res) => {
  //update an existing tier
  db.editAbout(req.params.projectId, req.body, (err, results) => {
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})

app.delete('/projects/:projectId/campaign/tiers/:tierId', (req, res) => {
  //delete an existing tier
   db.deleteTier(req.params.projectId, req.params.tierId, (err, results) => {
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})


module.exports = app;
