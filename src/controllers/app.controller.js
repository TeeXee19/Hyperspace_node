const connection = require('../../config/db.config.js')
const lib=require('./lib');
const util = require('util');

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