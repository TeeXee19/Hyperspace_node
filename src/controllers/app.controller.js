const connection = require('../../config/db.config.js')
const lib=require('./lib');
const util = require('util');
const api = require('../controllers/api.controller.js');


// const Swal = require('sweetalert2')



exports.save = (req, res) => {
    let data=lib.volunteerInfo(req.body);
    // util.inspect(data);
    console.log(req.body);
    let sql=lib.constructSql('volunteers',data);
    lib.saveData(sql, function(result){ 
	    if(result.affectedRows==1){
	        res.redirect('/success')                  
	    }
    })
}

exports.save_participant = (req, res) => {
    let data=lib.participantInfo(req.body);
    // util.inspect(data);
    console.log(req.body);
    let sql=lib.constructSql('participants',data);
    lib.saveData(sql, function(result){ 
	    if(result.affectedRows==1){
	        res.redirect('/success')                  
	    }
    })
}


exports.volunteers = (req, res) => {
    api.getVounteers(function(result) {
        res.render('/volunteers', { 
        	id: result.id, 
        	name: result.name, 
        	email: result.email, 
        	phone_no: result.phone_no, 
        	gender: results.gender,  
        	role: results.role, 
        	info: results.info,
            giturl: results.giturl,
            description: results.description, 
            location: result.location});      
    })
	
}

exports.participants = (req, res) => {
    api.getVounteers(function(result) {
        res.render('/participants', { 
            id: result.id, 
            name: result.name, 
            email: result.email, 
            phone_no: result.phone_no, 
            gender: results.gender,  
            level: results.level, 
            info: results.info,
            giturl: results.giturl,
            description: results.description, 
            location: result.location});      
    })
    
}