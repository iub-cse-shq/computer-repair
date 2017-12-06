var mongoose = require('mongoose');
var Service = require('./../models/serviceP.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

exports.service = function(req, res) {
    Service.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      	res.render('./../public/views/service/index2.ejs', {
		user: req.user || null,
		request: req,
		services:data
	});
    }
  });

};

exports.orderlist=function(req,res){
  res.render('./../public/views/service/orderlist.ejs',{
    user:req.user || null,
    request:req
  });
};

exports.edit=function(req,res){
  res.render('./../public/views/service/edit.ejs',{
    user:req.user || null,
    request:req
  });
};

exports.new=function(req,res){
  res.render('./../public/views/service/create.ejs',{
    user:req.user || null,
    request:req
  });
};

exports.view=function(req,res){
  res.render('./../public/views/service/view.ejs',{
    user:req.user || null,
    request:req
  });
};

exports.all = function(req, res) {
  Service.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");
    
     res.render('./../public/views/service/index2.ejs',{
    user:req.user || null,
    request:req,
    services:data
        });
    }
  });
};

module.exports.list = function(req, res) {
  Service.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var service = new Service(req.body);
  service.user = req.user;
  service.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.service);
};


exports.delete = function(req, res) {
	var service = req.service;
	service.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(service);
		}
	});
};


module.exports.update = function(req, res) {
  var service = req.service;

  	service = _.extend(service, req.body);

  	service.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(service);
  		}
  	});
};

exports.serviceByID = function(req, res, next, id) {
	Service.findById(id).populate('user', 'email').exec(function(err, service) {
		if (err) return next(err);
		if (!service) return next(new Error('Failed to load service ' + id));
		req.service = service;
		next();
	});
};
