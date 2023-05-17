构建着色器生成一个program, gpu获取这个program，最终渲染到屏幕上。
最后渲染一个像素组成的数组，当一组和当个像素有关联的数据叫做一帧。

两个着色器程序的功能范围非常有限：
- 顶点着色器将模型的每个顶点转换为当前场景的正确位置
- 片段着色器为组成点、线或三角形的每个片段（像素）分配颜色

着色器程序使用的数据类型：
- uniform   if you are going to assign the same color to every processed vertex, then that color could be a uniform variable  当所有顶点要使用同一个颜色的话使用该数据类型
- attribute A typical attribute value is the (x,y,z) location of a vertex. 顶点数据的呈现形式
- varying 


// TODO: http://learnwebgl.brown37.net/rendering/introduction.html#rendering-steps 
渲染速度：
- 减小渲染上下文的切换

引起渲染上下文的切换的操作是：
- Selecting a shader program.
- Setting the value of a uniform variable in a shader program.
- Attaching an attribute variable to a buffer object.
- Any action that changes the state of the gl JavaScript object.


