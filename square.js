function Square(x, y, cl, sizexy) {

    this.xpos = x;
    this.ypos = y;
    this.c = cl;
    this.isBomb = 0;  // Normal
    this.seen = 0;
    this.value = 0;

    this.display = function() {
        fill(this.c);
        rectMode(CORNER);
        rect(this.xpos, this.ypos, sizexy, sizexy);
    }

    this.draw = function() {
        fill(this.c);
        rectMode(CORNER);
        rect(this.xpos, this.ypos, sizexy, sizexy);
        textSize(10);
        fill(255, 102, 153);
        text(this.value.toString(), this.xpos, this.ypos+10);
    }

    this.setSeen = function() {
        this.seen = 1;
        this.c = (60);
    }

    this.setValue = function(n) {
        this.value = n;
        this.seen = 1;
    }

    this.setAsBomb = function() {
        this.isBomb = 1;
        this.c = (13, 20, 6);
    }

    this.clicked = function() {
        return this.isBomb;
    }
}
