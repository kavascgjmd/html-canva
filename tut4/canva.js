let canvas = document.querySelector("canvas");
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();
})

let mouse = {
     x : 10,
     y : 10
}
window.addEventListener("mousemove", function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})
function Circle(x ,y , radius,dx, dy , color){
 this.x = x;
 this.y = y;
 this.radius = radius;
 this.dx = dx;
 this.dy = dy;
 this.color = color;
 this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y , this.radius, 0, Math.PI * 2 , false);
    c.fillStyle = this.color;
    c.fill();
 }
}
let circle1;
let circle2;
function init(){
    circle1 = new Circle(200,200,100,0,0,"red");
    circle2 = new Circle(10, 10 , 20, 0,0,"blue");
}
function getdistance (x1 , y1 , x2 , y2){
    return Math.sqrt(Math.pow((x1-x2), 2)+Math.pow((y1-y2),2));
}
function hi(){
    requestAnimationFrame(hi);
    c.clearRect(0,0,window.innerWidth, window.innerHeight);
    circle1.draw();
    circle2.draw();
    circle2.x = mouse.x;
    circle2.y = mouse.y;

    if(getdistance(circle1.x , circle1.y , circle2.x , circle2.y) < (circle1.radius + circle2.radius)){
        circle1.color = "blue";
    }
    else {
        circle1.color = "red";
    }
}

init();
hi();

