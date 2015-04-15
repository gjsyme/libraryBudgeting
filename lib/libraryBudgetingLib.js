Records = new Mongo.Collection("records");

//common code
Meteor.methods({
  addRecord: function(name, cost, popStart, popEnd){
    Records.insert({
      name: name,
      cost: cost,
      popStart: popStart,
      popEnd: popEnd
    });
  },
  deleteRecord: function(recordId){
    Records.remove(recordId);
    Blaze.render('home');
  }
})
