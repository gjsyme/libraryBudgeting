Meteor.subscribe("records");

Template.home.helpers({
  records: function(){
    return Records.find();
  }
});

Template.create.events({
  "submit":function(event){
    event.preventDefault();
    var name = event.target.name.value;
    var cost = event.target.cost.value;
    var popStart = event.target.popStart.value;
    var popEnd = event.target.popEnd.value;

    Meteor.call("addRecord", name, cost, popStart, popEnd);

    event.target.name.value = '';
    event.target.cost.value = '';
    event.target.popStart.value = null;
    event.target.popEnd.value = null;

    return false;
  }
});

Template.detail.events({
  "submit":function(event){
    var id = event.target.id.value;
    Meteor.call("deleteRecord", id);
  }
})
