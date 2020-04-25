const med = (arr) => {
    try {
        let len = arr.length;
        arr.sort();
        if(len%2 != 0) {
            return arr[parseInt((len - 1)/2)]
        } else {
            return (arr[parseInt((len+1)/2)] + (arr[parseInt((len-1)/2)]))/2;
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports = med;