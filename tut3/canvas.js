let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
let gravity = 1;
let friction = 0.98;

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init()})
let colorarr = ['red', 'green', 'blue','yellow', 'black'];
function Ball(x , y, dx , dy , radius){
    this.x= x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius ;
    this.color = colorarr[Math.floor(Math.random()*4)];
    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius , 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    this.update = function(){
        this.draw();
        if(this.y > window.innerHeight- this.radius){
            this.dy = -this.dy*friction;
        }
        else {
            this.dy += gravity;
        }
        this.y += this.dy; 
    }
}
let ballarr = [];



function hi(){
   requestAnimationFrame(hi);
    c.clearRect(0,0 , window.innerWidth, window.innerHeight);
    for(let i = 0; i<ballarr.length; i++){
        ballarr[i].update();
    }

}
init();
hi();

function init(){
    ballarr = [];
    for(let i = 0; i<100; i++){
        let radius = Math.random()*30+1;
        let x = Math.random() * (window.innerWidth-2*radius)+radius;
        let y = Math.random() * (window.innerHeight-2*radius)+radius;
        let dx = Math.random()*8+1;
        let dy = Math.random()*8+1;
        let ball = new Ball(x,y, dx, dy, radius);
        ballarr.push(ball);
    }
    
}