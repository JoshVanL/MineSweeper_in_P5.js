function Board() {

  this.c = color(50);
  this.xpos = 0;
  this.ypos = 10;
  this.squares = [];

  this.display = function() {
    fill(this.c);
    //rectMode(CORNER);
    //rect(this.xpos, this.ypos, 100, 200);
    for(var i=0; i<this.squares.length; i++) {
      this.squares[i].display();
    }
  }

}
