function getCanvas(canvasId) {
  let canvas;

  canvas = document.getElementById(canvasId);
  if (!canvas || canvas.nodeName !== "CANVAS") {
    console.log(canvasId + "is not found");
  }

  return canvas;
}

function getWebglContext(canvas) {
  let context;

  context = canvas.getContext("webgl");
  if (!context) {
    console.log("No webgl context could be found");
  }

  return context;
}
