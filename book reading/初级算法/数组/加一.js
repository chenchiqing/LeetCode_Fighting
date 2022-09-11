var plusOne = function(digits) {
    let len = digits.length;
    let flag = false;
    digits[len - 1] ++;
    for(let i = len - 1; i >= 0; i --) {
        if(flag) {
            digits[i] ++;
        }
        if(digits[i] > 9) {
            flag = true;
        }else {
            flag = false;
        }
        digits[i] %= 10;
    }
    if(flag) {
        digits.unshift(1);
    }
    return digits;
};
