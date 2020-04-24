const rectangle = (type, length, breadth) => {
	switch (type) {
		case 'area':
			return length*breadth;
		case 'parameter':
			return 2*length*breadth;
 		default:
			return 0;
	}
}
module.exports = rectangle