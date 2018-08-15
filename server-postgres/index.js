const express = require('express');
const Log = require('log');
const db = require('../db/controller');

const app = express();
const port = process.env.PORT || 3002;

const log = new Log('info');

app.use(express.static('client/dist'));

//API SUPPORTING CURRENT FRONT_END FEATURES
app.get('/projects/:projectId/campaign/tiers', (req, res) => {
  //return tier info
	db.getTiers(req.params.projectId, (err, results) => {
		if(err) {
			log.error(err);
		} else {
			res.send(results);
		}
	});
})

app.get('/projects/:projectId/campaign/about', (req, res) => {
  //return about headings and sections content
  db.getAboutContents(req.params.projectId, (err, results) =>{
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})


//not yet hooked up
app.post('/projects/:projectId/campaign/pledges/new', (req, res) => {
  //userid, tierid, pledge amount, ship_to in body
  //let { userId, pledgeAmount, tierId, shipTo } = req.body;
  db.postNewPledge(req.params.projectId, req.body, (err, results) => {
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})


//EXTENDED CRUD API
app.put('/projects/:projectId/campaign/tiers', (req, res) => {
  //update an existing project
  db.editTier(req.params.projectId, req.body, (err, results) => {
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})

app.delete('/projects/:projectId/campaign/pledges/:pledgeId', (req, res) => {
  //delete an existing project
   db.deletePledge(req.params.projectId, req.params.pledgeId, (err, results) => {
  	if (err) {
  		log.error(err);
  	} else {
  		res.send(results);
  	}
  });
})


module.exports = app;
