//require mongoose
var mongoose = require('mongoose');
//create Schema
var Schema = mongoose.Schema;

//create the article schema
var ArticleSchema = new Schema({
  //key with object values
  title: {
    type: String,
    require: true
  },
  date: {
    type: String,
    require: true
  },
  url: {
    type: String,
    require: false
  }
},{
  timestamps: {
    createdAt: 'created_at'
  }
});

//create the model
var Article = mongoose.model('Article', ArticleSchema);

//exports
module.exports = Article;
