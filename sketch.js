var m = 16; //16*16
var n = m**2;
var sizexy = 20;
var bombs = 40;
var board;
var squares = [];
var gameover = 0;
var explored = 0;
var s = "Size : " + m.toString() + "x" + m.toString();
var g = "";


function setup() {
    setFrameRate(60);
    createCanvas(400, 400);
    background(255);
    board = new Board();
    bombsi = initBombs(bombs);
    
    var x = 0;
    var y = 0;
    var cl = [20, 20, 20]
    for (var i=0; i<m; i++) {
        squares[i] = [];
        for (var j=0; j<m; j++) {
            squares[i][j] = new Square(x, y, cl, sizexy);
            y += sizexy;
        }
        y = 0;
        x += sizexy;
    }

    for(var i=0; i<bombs; i++) {
        squares[bombsi[i]% m][ Math.floor(bombsi[i]/ m) ].setAsBomb();
    }

}

function draw() {
    board.display();
    for (var i=0; i<m; i++) {
        for (var j=0; j<m; j++) {
            squares[i][j].draw();
        }
    }

    textSize(25);
    textFont("Helvetica");
    textStyle(NORMAL);
    fill(0);
    text(s , 40, m*sizexy+30);
    text(g , 40, m*sizexy+60);
}


function initBombs(bombs) {
    var arr = [];

    while(arr.length < bombs){
        var ran = Math.ceil(Math.random()*m**2)
        if(arr.indexOf(ran) > -1) continue;
        arr[arr.length] = ran;
    }

    return arr;
}

function mousePressed() {
    // Find square clicked
    if(mouseButton == LEFT) {
        if(mouseX < m*sizexy && mouseY < m*sizexy) {
            i = Math.floor(mouseX/sizexy);
            j = Math.floor(mouseY/sizexy)

            gameover = squares[i][j].clicked();
            if(!gameover) {
                explore(i, j);
            } else {
                g = "You have lost! - Gameover.";
                console.log("gameover");
            }

            if(explored == (m*m - bombs)) {
                g = "You have Won! - Gameover.";
                console.log("Won!");
            }
        }
    }
}

function numBombNear(i, j) {
    var count = 0;
    for(var k=i-1; k<=i+1; k++) {
        for(var l=j-1; l<=j+1; l++) {
            if(k>=0 && k<m && l>=0 && l<m) {
                if(squares[k][l].isBomb) count += 1;
            }
        }
    }

    squares[i][j].setValue(count);
}

function explore(i, j) {
    if(!squares[i][j].seen && !squares[i][j].value && !squares[i][j].isBomb) {
        explored +=1;
        numBombNear(i, j);
        squares[i][j].setSeen();
        if(!squares[i][j].value) {
            if(i>0) explore(i-1, j);
            if(i<m-1) explore(i+1, j);
            if(j>0) explore(i, j-1);
            if(j<m-1) explore(i, j+1);
        }
    }
}
