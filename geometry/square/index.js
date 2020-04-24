const square = (type, side) => {
	switch (type) {
		case 'area':
			return side*side;
		case 'parameter':
			return 4*side;
 		default:
			return 0;
	}
}