var lengthOfLongestSubstring = function(s) {
    if(s == '') return 0
    let set = new Set()
    let left = 0
    let maxxn = 0
    for(let i = 0; i < s.length ; i++){
        while(set.has(s[i])){
            set.delete(s[left])
            left++
        }
        max = i-left+1
        maxxn = Math.max(max,maxxn)
        set.add(s[i])
    }
    return maxxn
};

lengthOfLongestSubstring("");