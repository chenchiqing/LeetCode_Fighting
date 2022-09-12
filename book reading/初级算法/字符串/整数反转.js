var reverse = function(x) {
    // 返回值
    let ans = 0;
    while(x != 0) {
        // 末尾数字
        ans = ans * 10 + x % 10;
        if((ans < Math.pow(-2, 31)) || (ans > Math.pow(2, 31) - 1)) {
            return 0;
        }
        x = ~~(x / 10); 
    } 
    return ans;
};

console.log(reverse(-123));