const mean = (arr) => {
    try {
        let res = 0;
        let len = arr.length;
        for(let i = 0; i<len; i++) {
            res = res + arr[i];
            console.log(res);
        }
        return res/len;
    } catch (err) {
        console.log(err);
    }
}
module.exports = mean;