var mouseEvent = "empty";


canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width = 1;
radius = 40;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("line_width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";  
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("X = "+mouse_x+", Y = "+mouse_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
        ctx.stroke();
    }

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
