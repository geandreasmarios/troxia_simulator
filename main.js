const slider1 = document.querySelector("#taxhtuta1");
const slider2 = document.querySelector("#taxhtuta2");
const main_canvas = document.querySelector("#main-canvas");
const slider3 = document.querySelector("#taxhtuta3");
const slider4 = document.querySelector("#taxhtuta4");

// function log_slider_values(){
//     console.log(slider1.value, slider2.value);
//     ctx.clearRect(0, 0, main_canvas.width, main_canvas.height);
//     ctx.beginPath();
//     ctx.rect(slider1.value, slider2.value, 150, 100);
//     ctx.stroke();
// }
// slider1.addEventListener("input", e => log_slider_values());
// slider2.addEventListener("input", e => log_slider_values());


// const ctx = main_canvas.getContext("2d");


// ctx.beginPath();
// ctx.rect(20, 20, 150, 100);
// ctx.stroke();
// console.log(slider1);

var canvas = new fabric.Canvas('main-canvas');

// create a rectangle with angle=45
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
  angle: 45
});

canvas.add(rect);

var circle = new fabric.Circle({
    radius: 20, fill: 'green',
    left: canvas.getWidth()/2,
    top: canvas.getHeight()/2,  
    originX: "center",
    originY: "center",
    fill:null,strokeWidth:3, stroke:"black", 
    startAngle: 0,
    endAngle: 360
});

canvas.add(circle);
function log_slider_values(){
    rect.set({
        left: Number.parseInt(slider1.value) / 100 * canvas.getWidth(), 
        top: Number.parseInt(slider2.value)/ 100 * canvas.getHeight()
    });
    // circle.set({
    //     left: Number.parseInt(slider3.value) / 100 * canvas.getWidth(), 
    //     top: Number.parseInt(slider4.value)/ 100 * canvas.getHeight()
    // });

    const s1 = Number.parseInt(slider1.value);
    const s2 = Number.parseInt(slider2.value);
    if(s1 == s2) return;
    const r = Math.abs(s1/(s2-s1) * 3);


    circle.set({
        radius: r, //Number.parseInt(slider3.value),
        endAngle: Number.parseInt(slider4.value)/100 * 360
    });

    canvas.renderAll();
}
slider1.addEventListener("input", e => log_slider_values());
slider2.addEventListener("input", e => log_slider_values());
slider3.addEventListener("input", e => log_slider_values());
slider4.addEventListener("input", e => log_slider_values());