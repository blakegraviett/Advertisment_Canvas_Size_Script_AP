// * Calls the Canvas
const canvas = app.activeDocument;

// * Make a UI 
// ? Makes the full window
const canvasWindow = new Window( "dialog", "Change Canvas Size");
canvasWindow.orientation = 'column';

// ? Makes the Button UI
const btnPanel = canvasWindow.add('panel', undefined, "Advertisement Size");
btnPanel.orientation = 'row';
const cinemaBtn = btnPanel.add("button", undefined, "Cinema");
const brandBtn = btnPanel.add("button", undefined, "Brand");
const panormaBtn = btnPanel.add("button", undefined, "Panorma");
const signatureBtn = btnPanel.add("button", undefined, "Signature");



// * Make the Buttons work OnClick
cinemaBtn.addEventListener('click', changeCanvasSize);
brandBtn.addEventListener('click', changeCanvasSize);
panormaBtn.addEventListener('click', changeCanvasSize);
signatureBtn.addEventListener('click', changeCanvasSize);


// * FUNCTIONS 
function changeCanvasSize(e) {
    if(e.target.text == 'Cinema'){
        canvas.resizeCanvas(1920, 1080);
    }

    if(e.target.text == 'Brand'){
        canvas.resizeCanvas(1920, 960);
    }

    if(e.target.text == 'Panorma'){
        canvas.resizeCanvas(1920, 480);
    }

    if(e.target.text == 'Signature'){
        canvas.resizeCanvas(1920, 300);
    }
}

// * STARTUP FUNCTIONS
canvasWindow.center();
canvasWindow.show();