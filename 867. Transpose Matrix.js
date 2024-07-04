function create2DMatrix(rows,cols, initialValue = 0){
    const matrix = [];
    for(let i = 0; i < rows;i++){
        const row= [];
        for(let j = 0; j< cols;j++){
            row.push(initialValue);
        }
        matrix.push(row);
    }
    return matrix;
}

var transpose = function(matrix){
    const rows = matrix.length;
    const cols = matrix[0].length;
    let transposed = create2DMatrix(cols,rows)
    for(let i = 0; i < rows;i++){
        for(let j = 0;j< cols;j++){
            transposed[j][i] = matrix[i][j] 
        }
    }
    return transposed
}

const matrix1 = [
    [2,4,1],
    [10,5,11],
    [18,7,6]
]


// console.log(rows,cols)
const transposedMatrix = transpose(matrix1)
console.log(transposedMatrix)
