function Square(x, y, cl, sizexy) {

    this.xpos = x;
    this.ypos = y;
    this.c = cl;
    this.isBomb = 0;  // Normal
    this.seen = 0;

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

    this.setAsBomb = function() {
        this.isBomb = 1;
    }

    this.clicked = function() {
        console.log(this.xpos, this.ypos);
        this.seen = 1;
        if(!this.isBomb){
            this.c = 200;
            return 0;

        } else {
            this.c = 100;
            return 1;
        }
    }
}
