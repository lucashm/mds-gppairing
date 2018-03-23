
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








var stage = new Konva.Stage({
    container: 'container',
    width: canvas.width,
    height: canvas.height
});

var layer = new Konva.Layer();

var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

for(var i = 0; i < 6; i++) {
    var box = new Konva.Rect({
        x: i * 30 + 50,
        y: i * 18 + 40,
        fill: colors[i],
        stroke: "black",
        strokeWidth: 4,
        draggable: true,
        width: 100,
        height: 50
    });

    box.on("dragstart", function() {
        this.moveToTop();
        layer.draw();
    });

    box.on("dragmove", function() {
        document.body.style.cursor = "pointer";
    });
    /*
       * dblclick to remove box for desktop app
       * and dbltap to remove box for mobile app
       */
    box.on("dblclick dbltap", function() {
        this.destroy();
        layer.draw();
    });

    box.on("mouseover", function() {
        document.body.style.cursor = "pointer";
    });
    box.on("mouseout", function() {
        document.body.style.cursor = "default";
    });

    layer.add(box);
}

// add the layer to the stage
stage.add(layer);

document.getElementById('container').appendChild(canvas);

