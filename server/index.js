const express = require('express');
const Log = require('log');
const db = require('../db/index');
const sampleData = require('../sample_data');

const app = express();
const port = process.env.PORT || 3002;

const log = new Log('info');

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.end();
});

app.get('/project/:projectId/section/:sectionName', (req, res) => {
  db.retrieve(req.params.sectionName, req.params.projectId, (err, results) => {
    if (err) {
      log.error(err);
    } else {
      res.send(results);
    }
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => log.info(`listening to ${port}`));
}

app.get('/insertSampleData', (req, res) => {
  sampleData.project.forEach((project) => {
    const cols = Object.keys(project).splice(1).join(', ');
    const values = `${JSON.stringify(project.risk_n_challenges)}`;
    db.insert('project', cols, values);
  });
  sampleData.eleType.forEach((ele) => {
    const cols = Object.keys(ele).splice(1).join(', ');
    const values = `${JSON.stringify(ele.type_description)}`;
    db.insert('ele_type', cols, values);
  });
  sampleData.offeredTiers.forEach((tier) => {
    const cols = Object.keys(tier).splice(1).join(', ');
    const values = [
      tier.base_amount,
      JSON.stringify(tier.title),
      JSON.stringify(tier.description),
      tier.delivery_date,
      JSON.stringify(tier.ships_to),
      tier.max_backers,
      tier.project_id,
    ];
    db.insert('offered_tiers', cols, values.join(', '));
  });
  sampleData.aboutComponents.forEach((component) => {
    const cols = Object.keys(component).splice(1).join(', ');
    const values = [
      component.ele_type_id,
      JSON.stringify(component.ele_description),
      component.project_id,
    ];
    db.insert('about_components', cols, values.join(', '));
  });
  res.send('hello GET');
});

module.exports = app;
