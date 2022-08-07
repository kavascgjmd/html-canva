let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
function randIntbw(x , y ){
   return Math.floor(Math.random()*(y-x+1) +x  );}
window.addEventListener("resize",function(){
    init();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})
let mouse = {
    x : 200,
    y : 200,
}
window.addEventListener("mousemove" , function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})

function particle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.radians = 0;
    this.velocity = Math.random()*0.05;
    this.distance = randIntbw(50 , 100);
    this.lastmouse = {
        x :x,
        y:y,
    }
    this.update = function(){
        const lastpoint = {
            x : this.x, 
            y : this.y,
        }
        this.lastmouse.x += (mouse.x - this.lastmouse.x )* 0.05;
        this.lastmouse.y += (mouse.y - this.lastmouse.y )* 0.05;
        this.radians += this.velocity;
        this.x = this.lastmouse.x + Math.cos(this.radians)*this.distance;
        this.y = this.lastmouse.y + Math.sin(this.radians)*this.distance;
               this.draw(lastpoint);
    }
    this.draw = function(lastpoint){
        //1
        // c.beginPath();
        // c.arc(this.x, this.y , this.radius , 0, Math.PI*2, false);
        // c.fillStyle = "blue";
        // c.fill();

        //2
        // c.beginPath();
        // c.moveTo(x,y);
        // c.lineTo(this.x , this.y);
        // c.strokeStyle = "blue";
        // c.stroke();

        //3
        c.beginPath();
       
        c.strokeStyle = "blue";
        c.lineWidth = this.radius;
        c.moveTo(lastpoint.x,lastpoint.y);
        c.lineTo(this.x , this.y);
        c.stroke();
        c.closePath();
        
        
    }
}

let Particles = [];
function init(){
    Particles = [];
    for(let i = 0; i<50 ; i++){
        Particles.push(new particle(200, 200, 2 ));
    }

}
function hi (){
    requestAnimationFrame(hi);
    c.fillStyle = "rgba(255,255,255,0.02)";
    c.fillRect(0,0,window.innerWidth, window.innerHeight);
    for(let i = 0; i<Particles.length ; i++){
        Particles[i].update();
    }
}

init();
hi();
