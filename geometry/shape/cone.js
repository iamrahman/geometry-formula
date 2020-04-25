class Cone {
	volume(radius, height) {
		return (Math.PI*radius*radius*height)/3;
	}
	lateralArea(radius, lateral) {
		return Math.PI*radius*lateral;
    }
    area(radius, height, lateral) {
        return Math.PI*radius*( lateral + radius);
    }
}
module.exports = Cone;