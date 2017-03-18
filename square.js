function Square(x, y, cl, sizexy) {
    this.xpos = x;
    this.ypos = y;
    this.c = cl;
    this.type = 0;  // Normal

    this.display = function() {
        fill(this.c);
        rectMode(CORNER);
        rect(this.xpos, this.ypos, sizexy, sizexy);
    }

    this.draw = function() {
        fill(this.c);
        rectMode(CORNER);
        rect(this.xpos, this.ypos, sizexy, sizexy);
    }
}
