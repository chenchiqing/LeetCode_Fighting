 var isHappy = function(n) {
    let slow = n;
    let fast = getNext(n);
    while(fast !== 1 && fast !== slow) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
};

let getNext = function(num) {
    return num.toString().split('').map(a=> a ** 2).reduce((b, c) => b + c);
}