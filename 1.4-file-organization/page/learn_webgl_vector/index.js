let Learn_webgl_vector3 = function () {
  let self = this;

  // Q: 创建的向量是没有方向的    dx, dy, dz是向量在坐标轴上对应的分量
  self.create = function (dx, dy, dz) {
    let v = new Float32Array(3);
    v[0] = 0;
    v[1] = 0;
    v[3] = 0;
    if (arguments.length >= 1) {
      v[0] = dx;
    }
    if (arguments.length >= 2) {
      v[1] = dy;
    }
    if (arguments.length >= 3) {
      v[2] = dz;
    }

    return v;
  };

  self.createFrom = function (from) {
    let v = new Float32Array(3);
    v[0] = from[0];
    v[1] = from[1];
    v[2] = from[2];

    return v;
  };

  self.createFrom2Points = function (tail, head) {
    let v = new Float32Array(3);
    self.subtract(v, tail, head);
    return v;
  };

  self.copy = function (to, from) {
    to[0] = from[0];
    to[1] = from[1];
    to[2] = from[2];
    return to;
  };

  self.length = function (v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  };

  self.normalize = function (v) {
    let length, percent;
    length = self.length(v);
    // TODO: why?
    if (Math.abs(length) < 0.0000001) {
      return null; // invalid vector
    }

    percent = 1.0 / length;
    v[0] = v[0] * percent;
    v[1] = v[1] * percent;
    v[2] = v[2] * percent;

    return v;
  };

  self.add = function (result, v1, v2) {
    result[0] = v1[0] + v2[0];
    result[1] = v1[1] + v2[1];
    result[2] = v1[2] + v2[2];
  };

  self.subtract = function (vector, tail, head) {
    vector[0] = head[0] - tail[0];
    vector[1] = head[1] - tail[1];
    vector[2] = head[2] - tail[2];
  };

  self.crossProduct = function (result, v1, v2) {
    result[0] = v1[1] * v2[2] - v1[2] * v2[1];
    result[1] = v1[2] * v2[0] - v1[0] * v2[2];
    result[2] = v1[0] * v2[1] - v1[1] * v2[0];
  };

  self.dotProduct = function (v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
  };

  self.print = function (name, v) {
    let maximum, order, digits;

    maximum = Math.max(v[0], v[1], v[2]);
    order = Math.floor(Math.log(maximum) / Math.LN10 + 0.00000001);
    digits = order <= 0 ? 5 : order > 5 ? 0 : 5 - order;

    console.log(
      `Vector3: ${name}: ${v[0].toFixed(digits)} ${v[1].toFixed(
        digits
      )} ${v[2].toFixed(digits)}`
    );
  };
};
