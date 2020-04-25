class Triangle {

    type(arr) {
        let sorted = arr.sort()
        if(arr[0] === arr[1] === arr[2]){
            return "Equilateral"
        } 
        else if(arr[0]==arr[1] || arr[1]==arr[2] || arr[2]==arr[0]){
            return "Isosceles"
        }
        else if(arr[2]*arr[2] === arr[0]*arr[0] + arr[1]*arr[1]){
            return "Right angle"
        } else {
            return "Scalene"
        }
    }
}
module.exports = Triangle;