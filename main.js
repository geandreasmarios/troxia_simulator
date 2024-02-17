const slider1 = document.querySelector("#taxhtuta1");
const slider2 = document.querySelector("#taxhtuta2");
const main_canvas = document.querySelector("#main-canvas");


function log_slider_values(){
    console.log(slider1.value, slider2.value);
    ctx.clearRect(0, 0, main_canvas.width, main_canvas.height);
    ctx.beginPath();
    ctx.rect(slider1.value, slider2.value, 150, 100);
    ctx.stroke();
}
slider1.addEventListener("change", e => log_slider_values());
slider2.addEventListener("change", e => log_slider_values());


const ctx = main_canvas.getContext("2d");


ctx.beginPath();
ctx.rect(20, 20, 150, 100);
ctx.stroke();
console.log(slider1);