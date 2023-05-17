function createAndFillBUfferObject(gl, data) {
  var buffer_id;

  buffer_id = gl.createBuffer();
  if (!buffer_id) {
    out.displayError("failed to create the buffer object for" + model_name);
    return null;
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer_id);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  return buffer_id;
}
