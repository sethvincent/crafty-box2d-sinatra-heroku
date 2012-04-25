window.onload = function () {
    gameInit();
};

gameInit = function(){
  Crafty.init(720, 480);
  Crafty.canvas.init();
  Crafty.box2D.init(0, 10, 32, true);
  
  var floor = Crafty.e("2D, Canvas, Box2D")
      .attr({ x: 0, y: 0 })
      .box2d({
        bodyType: 'static',
        shape: [[0, 480], [720, 480]]
      });
      
  var box = Crafty.e("2D, Canvas, Color, Box2D")
      .attr({ x: 0, y: 0, w: 20, h: 20 })
      .color("#FF0000")
      .box2d({
        bodyType: 'dynamic'
      })
  
}