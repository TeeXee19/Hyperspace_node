'use strict';

const mysql = require('mysql');
// //local mysql db connection
// const dbConn = mysql.createConnection({  
// 	host     : 'localhost',  
// 	user     : 'root', 
// 	password : '',  
// 	database : 'hyperspace_db'
// });


// Heroku mysql db connection
const dbConn = mysql.createPool({  
	host     : 'us-cdbr-east-03.cleardb.com',  
	user     : 'b5251d36042f2b', 
	password : '835addfc',  
	database : 'heroku_66b8eafc1af4aef'
});



// dbConn.connect(
// 	function(err) {  
// 		if (err) throw err;  
// 		console.log("Database Connected!");
// 	});

 // dbConn.on('error', function(err) {
 //    console.log('db error', err);
 //    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
	//    dbConn.connect(
	// 		function(err) {  
	// 			if (err) throw err;  
	// 			console.log("Database Connected!");
	// 		});                         // lost due to either server restart, or a
 //    } else {                                      // connnection idle timeout (the wait_timeout
 //      throw err;                                  // server variable configures this)
 //    }
 //  });

module.exports = dbConn;
