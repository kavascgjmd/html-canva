let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let c = canvas.getContext('2d');

let mouse = {
    x : undefined,
    y : undefined,
}

function abs(x){
    if(x > 0){
        return x;
    }
    return -x;
}
let colorArr = ["red" , "blue", "green" , "black" , "yellow"];
window.addEventListener("mousemove", function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})


function Circle(x, y , radius, dx, dy){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx; 
    this.dy = dy;
    this.coloridx =     Math.floor(Math.random()*4);
    this.animate = function(){
   
    
    if(this.x > window.innerWidth- this.radius || this.x < this.radius){
        this.dx = -this.dx;
    }
    if(this.y > window.innerHeight- this.radius || this.y < this.radius){
        this.dy = -this.dy;
    }

     this.x -= this.dx;
     this.y -= this.dy;
     c.beginPath();
     c.arc(this.x , this.y, this.radius , 0 , Math.PI * 2 , false);
     let i = 
       c.fillStyle = colorArr[this.coloridx];
      
     c.fill();
     if(abs(this.x - mouse.x) < 50 && abs(this.y - mouse.y) < 50 && this.radius < 100){
        this.radius += 10;
     }
     else if(this.radius > 2 ){
        this.radius -=1;
     }
    }
}

let circlearr = [];


function init(){
    circlearr = [];
    for(let  i = 0; i<1000; i++){
        let x = Math.random()*(window.innerWidth-60)+30;
        let y = Math.random()* (window.innerHeight-60)+30;
        let dx = (Math.random()-0.5)*8;
        let dy = (Math.random()-0.5)*8;
        let circle = new Circle(x, y, 30, dx , dy);
        circlearr.push(circle);
    }
}

function hi (){
    requestAnimationFrame(hi);
    c.clearRect(0 , 0 , window.innerWidth, window.innerHeight);
   
    for(let i = 0; i<circlearr.length ; i++){
        circlearr[i].animate();
    }
}
init();
hi();