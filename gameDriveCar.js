let mycanvas = document.getElementById("game");
let ctx = mycanvas.getContext("2d");
let tankImage;
let moneyImage;
let bombImage;
let tank1 = new Tank(600, 290, 100, 100, 'left', 1)
let money1 = new Objects(600, 90, 50, 50);
let money2 = new Objects(500, 500, 50, 50);
let bomb1 = new Objects(200, 290, 50, 50);
let bomb2 = new Objects(1000, 290, 50, 50)
let mark = 0;
let checkEnd = true;

setInterval(function () {
    checkEnd = endGame();
    if (checkEnd){
    ctx.clearRect(0, 0, 1340, 600);
    drawTank();
    drawObjects();
    }
    else alert('Số điểm bạn là: '+mark);
}, 50);

function endGame(){
    if(Math.abs(tank1.x-bomb1.x)<50 & Math.abs(tank1.y-bomb1.y)<50 || Math.abs(tank1.x-bomb2.x)<50 & Math.abs(tank1.y-bomb2.y)<50){
        return false;
    }
    return true;
}

function calMark(){
      if(Math.abs(tank1.x-money1.x)<50 & Math.abs(tank1.y-money1.y)<50){
          mark += 1;
          money1.x += 200;
          if (money1.x > 1340) money1.x = money1.x -= 500;
          if (money1.x < 0) money1.x += 200;
          if (money1.y > 600) money1.y = money1.y -= 500;
          if (money1.y < 0) money1.y += 200;
      }
      if(Math.abs(tank1.x-money2.x)<50 & Math.abs(tank1.y-money2.y)<50){
        mark += 1;
        money2.x += 200;
        if (money2.x > 1340) money2.x = money2.x -= 500;
        if (money2.x < 0) money2.x += 200;
        if (money2.y > 600) money2.y = money2.y -= 500;
        if (money2.y < 0) money2.y += 200;
    }
}

function Tank(x, y, width, height, direction, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.speed = speed;
}
function Objects(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}


function drawTank() {
    if (tank1.direction === 'up') { tankImage = document.getElementById("up"); }
    if (tank1.direction === 'down') { tankImage = document.getElementById("down"); }
    if (tank1.direction === 'left') { tankImage = document.getElementById("left"); }
    if (tank1.direction === 'right') { tankImage = document.getElementById("right"); }
    if (tank1.direction === 'up') { tank1.y -= tank1.speed; }
    if (tank1.direction === 'down') { tank1.y += tank1.speed; }
    if (tank1.direction === 'left') { tank1.x -= tank1.speed; }
    if (tank1.direction === 'right') { tank1.x += tank1.speed; }
    calMark();
    ctx.drawImage(tankImage, tank1.x, tank1.y, tank1.width, tank1.height);
}
function drawObjects() {
    moneyImage = document.getElementById('money');
    bombImage = document.getElementById('bomb');
    ctx.drawImage(moneyImage, money1.x, money1.y, money1.width, money1.height);
    ctx.drawImage(moneyImage, money2.x, money2.y, money2.width, money2.height);
    ctx.drawImage(bombImage, bomb1.x, bomb1.y, bomb1.width, bomb1.height);
    ctx.drawImage(bombImage, bomb2.x, bomb2.y, bomb2.width, bomb2.height);
}
function upArrowPressed() {
    tank1.direction = 'up';
}
function downArrowPressed() {
    tank1.direction = 'down';
}
function leftArrowPressed() {
    tank1.direction = 'left';
}
function rightArrowPressed() {
    tank1.direction = 'right';
}
function increaseSpeed() {
    tank1.speed += 2;
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 17: increaseSpeed();
            break;
        case 37: leftArrowPressed();
            break;
        case 39: rightArrowPressed();
            break;
        case 38: upArrowPressed();
            break;
        case 40: downArrowPressed();
            break;
    }
}
function waitKeyboard() {
    window.addEventListener('keydown', moveSelection);
}