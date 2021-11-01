const longestIncreasingPath = (matrix) => {
  if (matrix == null || matrix.length === 0) return 0;
  const h = matrix.length;
  const w = matrix[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const cache = [...Array(h)].map(() => Array(w).fill(null));

  const moveControl = (x, y) => {
    if (cache[x][y] != null) return cache[x][y];
    let max = 1;
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      if (i >= 0 && i < h && j >= 0 && j < w && matrix[i][j] > matrix[x][y]) {
        const len = moveControl(i, j) + 1;
        max = Math.max(max, len);
      }
    }
    cache[x][y] = max;
    return max;
  };

  let max = 1;
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      const len = moveControl(i, j);
      max = Math.max(max, len);
    }
  }
  return max;
};


/*
Success
Details 
Runtime: 92 ms, faster than 98.82% of JavaScript online submissions for Longest Increasing Path in a Matrix.
Memory Usage: 43.1 MB, less than 82.82% of JavaScript online submissions for Longest Increasing Path in a Matrix.
*/
