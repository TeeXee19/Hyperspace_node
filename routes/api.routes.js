module.exports = (app) => {
const api = require('../src/controllers/api.controller.js');

	app.get('/api/volunteers', api.getVounteers)
}