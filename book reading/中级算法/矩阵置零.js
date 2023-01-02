var setZeroes = function(matrix) {
    let rowLen = matrix.length;
    let colLen = matrix[0].length;

    // 标记第一行是否本来就有0
    let rowFlag = false;
    // 标记第一列是否本来就有0
    let colFlag = false;

    // 将第一行和第一列作为伪数组，用来存储对应行列的0值
    for(let i = 0; i < rowLen; i ++) {
        for(let j = 0; j < colLen; j ++) {
            if (matrix[i][j] == 0) {
                if(0 == i) {
                    rowFlag = true;
                }
                if(0 == j) {
                    colFlag = true;
                }
                matrix[0][j] = matrix[i][0] = 0;
            }
        }
    }
    for(let i = 1; i < rowLen; i ++) {
        for(let j = 1; j < colLen; j ++) {
            if(0 == matrix[0][j] || 0 == matrix[i][0]) {
                matrix[i][j] = 0;
            }
        }
    }
    // 第一行本来就有0
    if(rowFlag) {
        for(let i = 0; i < colLen; i ++) {
            matrix[0][i] = 0;
        }
    }
    // 第一列本来就有0
    if(colFlag) {
        for(let i = 0; i < rowLen; i ++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
};