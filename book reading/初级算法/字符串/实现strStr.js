var strStr = function(haystack, needle) {
    let haylen = haystack.length;
    let needlen = needle.length;
  
    if (!needlen) {
      return 0;
    } else if (haylen < needlen) {
      return -1;
    } else if (haylen === needlen) {
      return haystack === needle ? 0 : -1;
    } else {
      for (let i = 0; i <= haylen - needlen; i++) {
        if (haystack[i] === needle[0]) {
          if (haystack.substring(i, i + needlen) === needle) {
            return i;
          }
        }
        
      }
    }
    return -1;
};

console.log(strStr("hello", "he"));