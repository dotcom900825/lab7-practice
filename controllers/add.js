var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
  newFriend = { name: req.query.name, description: req.query.description};
  data['friends'].push(newFriend);
  res.render('addFriend', { data: data});

 }
