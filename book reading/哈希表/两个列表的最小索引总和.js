var findRestaurant = function(list1, list2) {
    let hash = new Map();
    let res = [];
    let indexSum = -1;
    for(let i = 0; i < list1.length; i ++) {
       hash.set(list1[i] ,i);
    }
    for(let i = 0; i < list2.length; i ++ ) {
        if(hash.has(list2[i])) {
            if(indexSum == -1) {
                indexSum = hash.get(list2[i]) + i;
                res = [list2[i]];
            } else {
                if(indexSum > hash.get(list2[i]) + i) {
                    indexSum = hash.get(list2[i]) + i;
                    res = [list2[i]];
                } else if(indexSum == hash.get(list2[i]) + i) {
                    res.push(list2[i]);
                }
            }
        }
    }
    return res;
};

findRestaurant([1,1,2], [1,2,3]);