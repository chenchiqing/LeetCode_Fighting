var mergeAlternately = function(word1, word2) {
    let len1 = word1.length;
    let len2 = word2.length;
    let ans = []
    let i = 0;
    let j = 0;
    while(i < len1 || j < len2) {
        if(i < len1) {
            ans.push(word1[i]);
            i ++;
        }
        if(j < len2) {
            ans.push(word2[j]);
            j ++;
        }
    }
    return ans.join('');
};