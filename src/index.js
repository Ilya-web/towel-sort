
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    let res2 = [];

    if(matrix && matrix.length > 0) {
        res = matrix.map((item, index) => {
            if ((index + 1) % 2 === 0) {
                item.reverse();
            }
            return item
        });

        res.map((item) => {
            return item.map((item) => {
                res2.push(item);
            });

        });

        return res2;
    }

    return [];

};
