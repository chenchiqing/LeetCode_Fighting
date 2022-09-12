var reverseString = function(s) {
    let len = s.length;
    let flag = 0;
    while(flag < len / 2) {
        let temp = s[len - 1 - flag];
        s[len - 1 - flag] = s[flag];
        s[flag] = temp;
        flag ++;
    }
    return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));