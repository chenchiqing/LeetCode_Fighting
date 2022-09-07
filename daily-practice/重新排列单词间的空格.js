var reorderSpaces = function(text) {
    let prewords = text.split(" ");
    let words = [];
    prewords.forEach(preword => {
        if(preword != "") {
            words.push(preword);
        }
    });
    let len = text.length;
    let l = 0;
    words.forEach(word => {
        l = l + word.length;
    })
    let spaceLen = len - l;
    let single;
    let last;
    if(words.length > 1) {
        single = spaceLen/(words.length - 1);
        last = spaceLen%(words.length - 1);
    }else {
        last = spaceLen;
    }
    let str;
    if(spaceLen != 0 && words.length > 1) {
        str = words.join(" ".repeat(single));
        if(last != 0) {
            str += " ".repeat(last);
        }
        return str;
    }
    if(words.length == 1 && last != 0) {
        str =words[0] + " ".repeat(last);
        return str;
    }
    return text;
};

console.log(reorderSpaces("  hello"));