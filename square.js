function Square(x, y, cl, sizexy) {

    this.xpos = x;
    this.ypos = y;
    this.c = cl;
    this.isBomb = 0;  // Normal
    this.seen = 0;
    this.value = 0;
    this.textColour = 0;

    this.display = function() {
        fill(this.c);
        rectMode(CORNER);
        rect(this.xpos, this.ypos, sizexy, sizexy);
    }

    this.draw = function() {
        fill(this.c);
        rectMode(CORNER);
        rect(this.xpos, this.ypos, sizexy, sizexy);
        if(this.seen && this.value>0) {
            textSize(15);
            fill(this.textColour);
        }
        text(this.value.toString(), this.xpos+5, this.ypos+15);
    }

    this.setSeen = function() {
        this.seen = 1;
        switch (this.value) {
            case 1:
                this.textColour = (51, 51, 255);
                break;
            case 2:
                this.textColour = (0, 153, 0);
                break;
            case 3:
                this.textColour = (255, 0, 0);
                break;
            case 4:
                this.textColour = (0, 0, 102);
                break;
            case 5:
                this.textColour = (153, 0, 0);
                break;
            case 6:
                this.textColour = (255, 0, 0);
                break;
            case 7:
                this.textColour = (0, 0, 0);
                break;
            case 8:
                this.textColour = (96, 96, 96);
                break;
            }
        this.c = (60);
    }

    this.setValue = function(n) {
        this.value = n;
        this.seen = 1;
    }

    this.setAsBomb = function() {
        this.isBomb = 1;
        //this.c = (13, 20, 6);
    }

    this.clicked = function() {
        return this.isBomb;
    }
}
