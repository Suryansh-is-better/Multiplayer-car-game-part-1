var ball;
var database, position
function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
var ballref = database.ref('ball/position')
ballref.on("value",readposition,errormesseage)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        resetvalue(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        resetvalue(1,0);
    }
    else if(keyDown(UP_ARROW)){
        resetvalue(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        resetvalue(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readposition(data){
    position = data.val();
    ball.x = position.x
    ball.y = position.y
}

function errormesseage(){
    console.log("error database")
}

function resetvalue(x,y) {
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}