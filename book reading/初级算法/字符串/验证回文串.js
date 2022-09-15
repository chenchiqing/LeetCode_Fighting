var isPalindrome = function(s) {
    s = s.replace(/\W|_/g, "").toLocaleLowerCase();
    return [...s].reverse().join("") == s;
};

console.log(isPalindrome("I am GENJI, Hello!"))