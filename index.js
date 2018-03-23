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
    image.src = "./assets/" + (member + 1) + ".png";

    image.onload = function () {
        let imageX = (member * threshold) + threshold;
        ctx.drawImage(image, imageX, 0, imageWidth, imageHeight);
        ctx.beginPath();
        ctx.moveTo(imageX, 0);
        ctx.lineTo((threshold * member + threshold), canvas.height);
        ctx.stroke();
        //filling mirror spaces
        ctx.rect((threshold * member + threshold), (threshold * member + threshold), imageWidth, imageHeight);
        ctx.fillStyle = "#7f8c8d";
        ctx.fill();
    }
}

//draw vertical
for (let member = 0; member < numbersOfMembers; member++) {
    let image = new Image();
    let imageWidth = (canvas.width - threshold) / numbersOfMembers;
    let imageHeight = (canvas.height - threshold) / numbersOfMembers;
    image.src = "./assets/" + (member + 1) + ".png";

    image.onload = function () {
        let imageY = (member * threshold) + threshold;
        ctx.drawImage(image, 0, imageY, imageWidth, imageHeight);
        ctx.beginPath();
        ctx.moveTo(0, imageY);
        ctx.lineTo(canvas.height, (threshold * member + threshold));
        ctx.stroke();
    }
}



let stage = new Konva.Stage({
    container: 'container',
    width: (canvas.width + threshold),
    height: (canvas.height + threshold)
});

let layer = new Konva.Layer();
let imageObj = new Image();
imageObj.onload = function () {
    for (let i = 0; i < numbersOfMembers; i++) {
        let xImg = new Konva.Image({
            x: 150 * i,
            y: 150 * i,
            image: imageObj,
            draggable: true,
            width: 106,
            height: 118
        });

        // add the shape to the layer
        layer.add(xImg);

        // add the layer to the stage
        stage.add(layer);
    }
};
imageObj.src = './assets/X.png';


document.getElementById('container').appendChild(canvas);

