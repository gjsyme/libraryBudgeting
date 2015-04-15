Router.route('/', function(){
  this.render('home');
});
Router.route('/create', function(){
  this.render('create');
});
Router.route('/records/:_id', function(){
  //pull data to populate the detailed record
  var record = Records.findOne({_id: this.params._id});
  var duration = new Date(record.popEnd) - new Date(record.popStart);
  duration = duration/86400000;
  record.duration = duration;
  this.render('detail', {
    data: function(){
      return{
        record: record
      }
    }
  });
});
Router.route('/records/delete/:_id', function(){
  Records.remove({_id: this.params._id});
  this.render('home');
});
