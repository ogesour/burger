var express = require('express');
var router = express.Router();

//import the modal to use its database functions
var burger = require("../models/burger.js")

//create all routes and set up logic within those routes where required
router.get("/", (req, res) => {
    burger.all(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
   burger.create([
       "burger_name", "devoured"
   ], [
       req.body.burger_name, req.body.devoured
   ], function(result){
       res.json({id: result.insertId});
   });

});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.update({
        
    })
})