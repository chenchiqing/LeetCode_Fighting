var isValidSudoku = function(board) {
    let hash = new Map();
    let rowLen = board.length;
    let colLen = board[0].length
    for(let i = 0; i < rowLen; i ++) {
        for(let j = 0; j < colLen; j ++) {
            let value = board[i][j];
            if(value == '.') {
                continue;
            }
            let row = `${value}r${i}`;
            let col = `${value}c${j}`;
            let box = `${value}b(${Math.floor(i / 3)}, ${Math.floor(j / 3)})`;
            if(hash.has(row) || hash.has(col) || hash.has(box)) {
                return false;
            }
            hash.set(row,1);
            hash.set(col,1);
            hash.set(box,1);
        }
    }
    return true;
};