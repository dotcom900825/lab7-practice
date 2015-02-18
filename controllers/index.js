// Get all of our friend data
var data = require('../data.json');
var handlebars = require('express3-handlebars')


exports.index = function(req, res){
	console.log(data);
	res.render('index', { data: data, helpers:{ link : function (url, text){
    return "<a href='" + url + "'>" + text + "</a>" ;
  }}});
};
