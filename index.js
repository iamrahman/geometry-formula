const squ_are = require('./geometry/shape/square')
const cir_cle  = require('./geometry/shape/circle')
const rect_angle = require('./geometry/shape/rectangle')
const cub_e = require('./geometry/other/cube')
const tri_angle = require('./geometry/shape/triangle')
const mean = require('./geometry/other/mean')
const median = require('./geometry/other/median')
const mode = require('./geometry/other/mode')
const cone_shape = require('./geometry/shape/cone');

let square = new squ_are()
let circle = new cir_cle()
let rectangle = new rect_angle()
let cube = new cub_e()
let triangle = new tri_angle()
let cone = new cone_shape()
let Geometry = {
    square, circle, rectangle, median, mode, cube, mean, triangle, cone
}
//let a=[1,2,4,6,2,3,1,2]
let arr = [4,5,3];
console.log(Geometry.cone.area(10,10,10));
module.exports = Geometry