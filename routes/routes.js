module.exports = (app) => {
    
   app.get('/', function (req, res) {
    res.render("index");
   });
    
    app.get('/about', function (req, res) {
        res.render("about");
    });
    
    app.get('/faqs', function (req, res) {
        res.render("faqs");
    });
    
    app.get('/team', function (req, res) {
        res.render("team");
    });
    
    app.get('/code_of_conduct', function (req, res) {
        res.render("code_of_conduct");
    });

    app.get('/volunteer', function (req, res) {
        res.render("volunteer");
    });
    
    app.get('/terms_of_service', function (req, res) {
        res.render("terms_of_service");
    });

   

}