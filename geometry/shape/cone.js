class Cone {
	volume(radius, height) {
		return (Math.PI*radius*radius*height)/3;
	}
	lateralArea(radius, slant_height) {
		return Math.PI*radius*slant_height;
    }
    area(radius, height, slant_height) {
        return Math.PI*radius*( slant_height + radius);
    }
}
module.exports = Cone;