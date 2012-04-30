
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Friends List example using Node.js, express.js, jade, and Backbone' })
};

var friends = [
          { name: 'Anita' },
          { name: 'Jeff' },
          { name: 'Jared' },
          { name: 'Aidan' },
          { name: 'Haven' },
          ];

exports.friends = function(req, res){
  console.log('loading friends');
  res.send(friends);
};

exports.saveFriends = function(req, res){
  res.send('alrighty then, we have a new friend!');
};
