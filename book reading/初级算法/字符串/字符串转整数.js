var myAtoi = function(s) {
    let res = s.trim().match(/^[-+]?\d+/);
    if(res !== null) {
        if(res[0] < Math.pow(-2, 31)) {
            return Math.pow(-2, 31);
        }
        if(res[0] > Math.pow(2, 31) - 1) {
            return Math.pow(2, 31) - 1;
        }
        return res[0];
    } 
    return 0 ;
    
    // console.log(res);
};

console.log(myAtoi("words and 987"));
// myAtoi("      4193 with words,,,");