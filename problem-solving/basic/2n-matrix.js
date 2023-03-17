// 123 34 76 334
// 34 56 45 32
// 34 567 178 34
// 54 23 786 87

// Matrix of 2nx2n
// Maximize the top left nxn matrix and print the total sum

const example = [
  [123, 34, 76, 334],
  [34, 56, 45, 32],
  [34, 567, 178, 34],
  [54, 23, 786, 87]
];

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function max2n(matrix) {
  const n = matrix.length / 2;
  const maxIndex = matrix.length - 1;
  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const mainEl = matrix[i][j];
      const topRight = matrix[maxIndex - i][j];
      const botLeft = matrix[i][maxIndex - j];
      const botRight = matrix[maxIndex - i][maxIndex - j];

      const selected = Math.max(mainEl, topRight, botLeft, botRight);

      console.log(i, j, selected);

      result = result + selected;
    }
  }

  return result;
}

// Expected
// [334, 786, 76, 123]
// [32, 567, 56, 34]
// [34, 178, 45, 34]
// [87, 23, 34, 54]

// Las puntas cambian con las puntas
// El medio rota entre si
// Los bordes cambian entre si con su contrario

// 123 34  76  334 38  43
// 34  56  45  32  128 6
// 34  567 178 34  10  23
// 54  23  786 87  27  65
// 66  93  800 321 2   5
// 34  67  3   33  12  125

// Cada numero se puede mover solo a 4 posiciones
// [2, 1] -> [3, 1] -> [2, 4] -> [3, 4]
// len 6 (max index 5)
// 1 -> 4
// 2 -> 3

// 5 - 1 -> 4
// 5 - 2 -> 3

// Restando los indices se obtiene el opuesto
