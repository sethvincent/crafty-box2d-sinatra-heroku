(function($) {
  
  var app = $.sammy('#main', function() {

    this.get('/', function() {
      var compiled = _.template("hello: <%= name %>");
      $('#main').text(compiled({name : 'moe'}));
    });
    
    this.get('#/huh', function(ctx) {
      var huh = _.template("hello: <%= name %>");
      $('#main').text(huh({name : 'bob'}));
    });
    
    this.get('#/oh', function(ctx) {
      var oh = _.template(test);
      $('#main').append(oh({name : 'poop'}));
    });

  });

  $(function() {
    app.run();
  });

})(jQuery);