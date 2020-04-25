class Rectangle {
    parameter(length, breadth) {
        return 2 * length * breadth;
    }
    area(length, breadth) {
        return length * breadth;
    }
}
module.exports = Rectangle;