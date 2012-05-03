var Backbone = require("backbone");

exports.Friend = Backbone.Model.extend({
    name: null    
});

exports.Friends = Backbone.Collection.extend({
    model: exports.Friend,
    initialize: function(models, options) {
        this.bind('add', this.logNewFriend);
    },
    logNewFriend: function(model) {
        console.log("New friend added: " + model.get("name"));
    }
});
