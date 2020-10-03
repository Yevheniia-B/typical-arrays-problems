exports.min = function min(array) {
    if (Array.isArray(array) && array.length > 0) {
        return Math.min(...array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length > 0) {
        return Math.max(...array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length > 0) {
        let i = 0;
        let value = 0;
        while (i < array.length) {
            value = value + array[i];
            console.log(value);
            i = i + 1;
        }
        return value / array.length;
    } else {
        return 0;
    }
};
