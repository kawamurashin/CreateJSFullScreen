let stage;
let canvas;
let lineShape;
let textContainer;
window.addEventListener("load", init);
function init() {
    canvas = document.getElementById("main_canvas");
    stage = new createjs.Stage(canvas);

    lineShape = new createjs.Shape();
    stage.addChild(lineShape);

    textContainer = new createjs.Container();
    stage.addChild(textContainer);

    windowResize();
    window.addEventListener('resize', windowResizeHandler, false);
}

function windowResizeHandler() {
    windowResize();
}
function windowResize() {
    drawLine();
    let width = document.documentElement.clientWidth || document.body.clientWidth;
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    canvas.width = width;
    canvas.height = height;
    stage.update();
}
function drawLine() {
    let width = document.documentElement.clientWidth || document.body.clientWidth;
    let height = document.documentElement.clientHeight || document.body.clientHeight;
    let margin = 50;
    let g = lineShape.graphics;
    g.clear();
    g.beginStroke("red");
    g.moveTo(0, margin);
    g.lineTo(0 + 20, margin - 20);
    g.moveTo(0, margin);
    g.lineTo(0 + 20, margin + 20);
    g.moveTo(0, margin);
    g.lineTo(width, margin);
    g.lineTo(width - 20, margin - 20);
    g.moveTo(width, margin);
    g.lineTo(width - 20, margin + 20);
    //
    g.moveTo(margin, 0);
    g.lineTo(margin - 20, 0+20);
    g.moveTo(margin, 0);
    g.lineTo(margin + 20, 0+20);
    g.moveTo(margin, 0);
    g.lineTo(margin, height);
    g.lineTo(margin - 20, height - 20);
    g.moveTo(margin, height);
    g.lineTo(margin + 20, height - 20);
    g.endStroke();
    //
    textContainer.removeAllChildren();
    var text = new createjs.Text();
    textContainer.addChild(text);
    text.color = "Red";
    text.font = "24px serif";
    text.text = width;
    text.textAlign = "center";
    text.x = width*0.5;
    text.y = margin +3;
    text = new createjs.Text();
    textContainer.addChild(text);
    text.color = "Red";
    text.font = "24px serif";
    text.text = height;
    text.textAlign = "center";
    text.x = margin - 3;
    text.y = height *0.5;
    text.rotation = 90;
}