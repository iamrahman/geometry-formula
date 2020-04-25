const median = (arr) => {
    try {
        let len = arr.length;
        var temp = {};
        for (let i = 0; i < arr.length; i++) {
            if (temp[arr[i]] == undefined) {
                temp[arr[i]] = 1;
            } else {
                temp[arr[i]] += 1;
            }
        }

        var max = 0, maxEle;
        for (const i in temp) {
            if (temp[i] > max) {
                max = temp[i];
                maxEle = i;
            }
        }
        let newArr = [];
        for (const i in temp) {
            if (temp[i] === max) {
                newArr.push(i);
            }
        }
        return newArr;
    } catch (err) {
        console.log(err);
    }
}
module.exports = median;