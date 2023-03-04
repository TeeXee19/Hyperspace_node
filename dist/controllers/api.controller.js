const connection = require('../../config/db.config.js');
const lib = require('./lib');

exports.getVolunteers = (req, res) => {

    let data = [];

    let queryStatement = "SELECT * FROM volunteers";
    console.log(queryStatement);

    connection.query(queryStatement, (err, results) => {
        if (err) {
            res.json({ 'message': 'OK', 'error': true, 'code': 500, 'result': 'Unable to fetch any records.' });
        }
        let length = Object.keys(results).length; //get the actual count of the total records

        for (let i = 0; i < length; i++) {
            data.push({
                "volunteer_personal": {
                    "name": results[i].name,
                    "email": results[i].email,
                    "phone_no": results[i].phone_no,
                    "gender": results[i].gender,
                    "location": results[i].location,
                    "role": results[i].role,
                    "info": results[i].info,
                    "giturl": results[i].giturl,
                    "description": results[i].description
                }
            });
        };

        res.json({ 'message': 'OK', 'error': false, 'code': 200, 'result': { 'count': length, 'data': data } });
    });
};

//Find Volunteer By ID
exports.findVolunteerById = function (id, result) {
    dbConn.query("Select * from volunteers where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};