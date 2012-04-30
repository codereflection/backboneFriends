
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
  friends.push({ name: req.body.name });
  console.log('Adding new friend: ' + req.body.name);
  res.send('alrighty then, we have a new friend named ' + req.body.name + '!');
};
