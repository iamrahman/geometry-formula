class Square {
    parameter(side) {
        return 4 * side;
    }
    area(side) {
        return side * side;
    }
}
module.exports = Square;