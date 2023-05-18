window.Triangle = function (vertices) {
  var self = this;
  self.vertices = vertices;
};

//-------------------------------------------------------------------------
/**
 * A simple model composed of an array of triangles.
 * @param name String The name of the model.
 * @constructor
 */
window.SimpleModel = function (name) {
  var self = this;
  self.name = name;
  self.triangles = [];
};

//-------------------------------------------------------------------------
/**
 * Create a Simple_model of 4 triangles that forms a pyramid.
 * @return SimpleModel
 */
window.CreatePyramid = function () {
  var vertices, triangle1, triangle2, triangle3, triangle4;

  // Vertex data
  vertices = [
    [0.0, -0.25, -0.5],
    [0.0, 0.25, 0.0],
    [0.5, -0.25, 0.25],
    [-0.5, -0.25, 0.25],
  ];

  // Create 4 triangles
  triangle1 = new Triangle([vertices[2], vertices[1], vertices[3]]);
  triangle2 = new Triangle([vertices[3], vertices[1], vertices[0]]);
  triangle3 = new Triangle([vertices[0], vertices[1], vertices[2]]);
  triangle4 = new Triangle([vertices[0], vertices[2], vertices[3]]);

  // Create a model that is composed of 4 triangles
  var model = new SimpleModel("simple");
  model.triangles = [triangle1, triangle2, triangle3, triangle4];

  return model;
};
