'use strict';
// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    // speed of the bugs
    this.speed = Math.floor((Math.random()*200)+100);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //canvas width = 505
    if(this.x <= 505) {  
        this.x += this.speed * dt;
    } else {
        this.x = -100;
    }
           
};      

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function() {
    this.x= 200;
    this.y= 400;
    this.sprite = 'images/char-cat-girl.png';
};
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.update = function() {

    // collision
    for (var i = 0; i < allEnemies.length; i++) {
    if(Math.abs(player.x - allEnemies[i].x) < 30 && Math.abs(player.y - allEnemies[i].y) < 30) {
        this.x = 200;
        this.y = 400;
        }
    }
    // reach weter
    if (player.y < 1) {
        window.alert("You Win");
        this.x = 200;
        this.y = 400;
}

};

Player.prototype.handleInput = function(keyCode) {

   if(keyCode == 'left' && this.x > 0) {
        this.x -= 50;
    }
    if(keyCode == 'right' && this.x < 400) {
        this.x += 50;
    }
    if(keyCode == 'up' && this.y > 3) {
        this.y -= 50;
    }
    if(keyCode  == 'down' && this.y < 400) {
        this.y += 50;
    }

};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now instantiate your objects.
let enemy1 = new Enemy(10,50);
let enemy2 = new Enemy(90,140);
let enemy3 = new Enemy(330,60);
let enemy4 = new Enemy(370,140);
let enemy5 = new Enemy(200,230);
// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5];
// Place the player object in a variable called player
let player =  new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
