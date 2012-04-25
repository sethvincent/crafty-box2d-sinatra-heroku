(function($) {
  
  var app = $.sammy('#main', function() {

    this.get('/', function() {
      var compiled = _.template("hello: <%= name %>");
      this.swap(compiled({name : 'moe'}));
    });
    
    this.get('#/huh', function(ctx) {
      var huh = _.template("hello: <%= name %>");
      this.swap(huh({name : 'bob'}));
    });
    
    this.get('#/oh', function(ctx) {
      var oh = _.template(test);
      this.swap(oh({name : 'poop'}));
    });

  });

  $(function() {
    app.run();
  });

})(jQuery);