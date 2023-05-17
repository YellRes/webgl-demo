class Triangle {
  vertices = [];
  constructor(vertices) {
    this.vertices = vertices || [];
  }
}

class SimpleModel {
  name = "";
  triangles = [];
  constructor(name, triangles) {
    this.name = name;
    this.triangles = triangles;
  }
}

const createPyramid = () => {
  let vertices, triangle1, triangle2, triangle3, triangle4;

  vertices = [
    [0.0, -0.25, -0.5],
    [0.0, 0.25, 0.0],
    [0.5, -0.25, 0.25],
    [-0.5, -0.25, 0.25],
  ];

  triangle1 = new Triangle([vertices[2], vertices[1], vertices[3]]);
  triangle2 = new Triangle([vertices[3], vertices[1], vertices[0]]);
  triangle3 = new Triangle([vertices[0], vertices[1], vertices[2]]);
  triangle4 = new Triangle([vertices[0], vertices[2], vertices[3]]);

  // Create a model that is composed of 4 triangles
  var model = new SimpleModel("simple");
  model.triangles = [triangle1, triangle2, triangle3, triangle4];

  return model;
};
