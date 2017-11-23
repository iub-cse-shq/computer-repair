var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ServiceSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required!'
  },

  description: {
    type: String,
    default: '',
    trim: true,
    required:'description required!'
   

  },
  
  im: {
    type: String,
    default: '',
    trim:true,
    required:'image required!'
    
  },
price:{
  type:Number,
  default:'0',
  trim:true,
  required:'price required!'
  
},
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var service = mongoose.model('Service', ServiceSchema, 'services');
module.exports = service;
