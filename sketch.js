var m = 16; //16*16
var n = m**2;
var sizexy = 20;
var bombs = 40;
var board;
var squares = [];
var gameover = 0;

function setup() {
    setFrameRate(60);
    createCanvas(400, 400);
    background(255);
    board = new Board();
    bombsi = initBombs(bombs);
    
    var x = 0;
    var y = 0;
    for (var i=0; i<m; i++) {
        squares[i] = [];
        for (var j=0; j<m; j++) {
            squares[i][j] = new Square(x, y, 20, sizexy);
            y += sizexy;
        }
        y = 0;
        x += sizexy;
    }

    for(var i=0; i<bombs; i++) {
        squares[Math.floor(bombsi[i]/m) ][ bombsi[i] % m ].setAsBomb(); // Set as bombs
    }

}

function draw() {
    board.display();
    for (var i=0; i<m; i++) {
        for (var j=0; j<m; j++) {
            squares[i][j].draw();
        }
    }
}


function mousePressed() {
    // Find square clicked
    if(mouseX < m*sizexy && mouseY < m*sizexy) {
        i = Math.floor(mouseX/sizexy);
        j = Math.floor(mouseY/sizexy)
        gameover = squares[i][j].clicked();

        if(!gameover) {
            search(i, j);
        }

    }
}


function search(i, j) {

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
