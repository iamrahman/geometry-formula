const trapezium = (type, paralle_side_1, paralle_side_2, height, side_3, side_4) => {
	side_3 = side_3 || 0;
	side_4 = side_4 || 0;
	switch (type) {
		case 'area':
			return (paralle_side_1+paralle_side_2)*height*0.5;
		case 'parameter':
			return paralle_side_1+paralle_side_2+side_3+side_4;
 		default:
			return 0;
	}
}
module.exports = trapezium;