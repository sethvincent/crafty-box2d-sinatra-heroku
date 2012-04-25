(function($) {
  
  var app = $.sammy('#main', function() {

    this.get('/', function() {
      var compiled = _.template("hello: <%= name %>");
      $('#main').text(compiled({name : 'moe'}));
    });
    
    this.get('#/huh', function(ctx) {
      var compiled = _.template("hello: <%= name %>");
      $('#main').text(compiled({name : 'bob'}));
    });
    
    this.get('#/oh', function(ctx) {
      var compiled = _.template("hello: <%= name %>");
      $('#main').text(compiled({name : 'poop'}));
    });

  });

  $(function() {
    app.run();
  });

})(jQuery);