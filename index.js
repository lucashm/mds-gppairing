let numbersOfMembers = 5;
let threshold = 200;

let canvas = document.createElement('canvas');
canvas.id = "main";
canvas.width = (threshold * numbersOfMembers) + threshold;
canvas.height = (threshold * numbersOfMembers) + threshold;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";
let ctx = canvas.getContext("2d");

//draw horizontal
for (let member = 0; member < numbersOfMembers; member++) {
    let image = new Image();
    let imageWidth = (canvas.width - threshold) / numbersOfMembers;
    let imageHeight = (canvas.height - threshold) / numbersOfMembers;
    console.log(canvas.width);
    console.log(imageWidth);
    image.src = "./assets/lucasssm.jpg";

    image.onload = function () {
        let imageX = (member * threshold) + threshold;
        ctx.drawImage(image, imageX, 0, imageWidth, imageHeight);
        ctx.beginPath();
        ctx.moveTo(imageX, 0);
        ctx.lineTo((threshold * member + threshold), canvas.height);
        ctx.stroke();
    }
}

//draw vertical
for (let member = 0; member < numbersOfMembers; member++) {
    console.log("coe");
    let image = new Image();
    let imageWidth = (canvas.width - threshold) / numbersOfMembers;
    let imageHeight = (canvas.height - threshold) / numbersOfMembers;
    image.src = "./assets/lucasssm.jpg";

    image.onload = function () {
        let imageY = (member * threshold) + threshold;
        ctx.drawImage(image, 0, imageY, imageWidth, imageHeight);
        ctx.beginPath();
        ctx.moveTo(0, imageY);
        ctx.lineTo(canvas.height, (threshold * member + threshold));
        ctx.stroke();
    }
}




document.body.appendChild(canvas);

