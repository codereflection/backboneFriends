
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Friends List example using Node.js, express.js, jade, and Backbone' })
};
