var longestCommonPrefix = function(strs) {
    let ans = strs[0] || "";
    if(strs.lenth == 1) {
        return ans;
    }
    for(let i =0; i < strs.length; i ++) {
        while(strs[i].slice(0, ans.length) != ans) {
            ans = ans.slice(0,ans.length - 1);
        }
    }
    return ans;
}