var isValidSudoku = function(board) {
    //初始化
    let rol = [];
    let col = [];
    let box = [];
    for (let i = 0; i < 9; i++) {
        rol[i] = [];
        col[i] = [];
        box[i] = [];
    }

    //遍历
    for (let i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {

            let value = board[i][j];

            if (board[i][j] != '.') {
                if (!rol[i].includes(value)) {
                    rol[i].push(value);
                } else {
                    return false;
                }

                if (!col[j].includes(value)) {
                    col[j].push(value);
                } else {
                    return false;
                }

                boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (!box[boxIndex].includes(value)) {
                    box[boxIndex].push(value);
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};