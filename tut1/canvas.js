let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let c = canvas.getContext('2d');

c.fillStyle = "red";
c.fillRect(100,100,100,100);
c.fillStyle = "blue";
c.fillRect(200,400,100,100);
c.fillStyle = "green";
c.fillRect(50, 500 , 100 , 50);

c.beginPath();
c.moveTo(50, 300);
c.lineTo(40, 400);
c.strokeStyle = "blue";
c.lineTo(400, 800);
c.stroke();



for(let i = 0; i<50; i++){
    let x = Math.random()*(window.innerWidth - 20);
    let y = Math.random()*(window.innerHeight - 20);
    c.beginPath();
c.arc(x, y, 20, 0,Math.PI * 2 , false );
c.strokeStyle = "grey";
c.stroke();
}