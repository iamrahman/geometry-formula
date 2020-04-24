const circle = (type, radius) => {
   switch (type) {
       case 'area':
           return Math.PI * radius * radius;
       case 'parameter':
           return Number(2 * Math.PI * radius);
        default:
           return 0;
   }
}
module.exports = circle;