var canvas=document.getElementById('mycanvas');
var ctx=canvas.getContext('2d');
//this will create a rectangle on html5 canvas
ctx.beginPath();
ctx.rect(20,40,50,50);
ctx.fillStyle="#FF0000";
ctx.fill();
ctx.closePath();



//this will design a circle

ctx.beginPath();
ctx.arc(240,160,20,0,Math.PI*2,false);
ctx.fillStyle="green";
ctx.fill();
ctx.closePath();



ctx.beginPath();
ctx.rect(160,10,100,40);
ctx.strokeStyle='rgba(0,0,255,0.5)';
ctx.stroke();




ctx.closePath();
