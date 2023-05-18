/**
 *
 */

function createShader(gl, sourceCode, type) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw "could not compile webgl program. \n\n" + info;
  }

  return shader;
}
function createVertexShader(gl, sourceCode) {
  return createShader(gl, sourceCode, gl.VERTEX_SHADER);
}
function createFragmentShader(gl, sourceCode) {
  return createShader(gl, sourceCode, gl.FRAGMENT_SHADER);
}

let vertexShaderSource = `
    
    void main(){
        gl_Position = u_Transform * vec4(a_Vertex, 1.0)
        v_vertex_color = vec4(u_Color, 1.0)
    }
`;

let fragmentShaderSource = `

`;
function createProgram(gl) {
  let program = gl.createProgram();
  gl.attachShader(program, {});
  gl.attachShader(program, {});
  gl.linkProgram(program);

  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}
function createTriangle(model) {
  let gl = document.querySelector("#triangleContainer").getContext("webgl");
  let program = createProgram(gl);

  let number_triangles = 0;
  let triangles_vertex_buffer_id = null;

  let a_Vertex_location = null;
  let u_Color_location = null;
  let u_Transform_location = null;

  let edge_color = new Float32Array([0.0, 0.0, 0.0, 1.0]);

  function _createBufferObject(data) {
    let buffer_id;

    buffer_id = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer_id);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    return buffer_id;
  }

  function _buildBufferObjectData() {
    let j, k, m, nv, numberVertices, triangle, vertex, vertices3;
    if (model.triangles.length > 0) {
      let number_triangles = model.triangles.length;
      let numberVertices = number_triangles * 3;
      vertices3 = new Float32Array(numberVertices * 3);

      nv = 0;
      for (j = 0; j < number_triangles; j++) {
        triangle = model.triangles[j];
        for (k = 0; k < 3; k++) {
          vertex = triangle.vertices[k];

          for (m = 0; m < 3; m++, nv++) {
            vertices3[nv] = vertex[m];
          }
        }
      }

      triangles_vertex_buffer_id = _createBufferObject(vertices3);
    }

    vertices3 = null;
  }

  function _getLocationOfShaderVariables() {
    u_Color_location = gl.getUniformLocation(program, "u_Color");
    u_Transform_location = gl.getUniformLocation(program, "u_Transform");
    a_Vertex_location = gl.getAttribLocation(program, "a_Vertex");
  }

  _buildBufferObjectData();
  _getLocationOfShaderVariables();

  function clearBuffer() {
    if (number_triangles > 0) {
      gl.deleteBuffer(triangles_vertex_buffer_id);
    }
  }

  function render() {
    var j, start;
  }
}

let model = CreatePyramid();

window.onload = () => {
  createTriangle(model);
};
