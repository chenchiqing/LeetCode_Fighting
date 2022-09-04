var numSpecial = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let rowArr = new Array(rows).fill(0);
    let colArr = new Array(cols).fill(0);
    let ans = 0;
    for(let i = 0; i < rows; i ++)
    {
        for(let j = 0; j < cols; j ++)
        {
            rowArr[i] += mat[i][j];
            colArr[j] += mat[i][j];
        }
    }
    for(let i = 0; i < rows; i ++)
    {
        for(let j = 0; j < cols; j ++)
        {
            if(rowArr[i] == 1 && colArr[j] == 1 && mat[i][j] == 1)
            {
                ans ++;
            }
            
        }
    }
    return ans;
  };