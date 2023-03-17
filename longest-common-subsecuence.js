let X = 'AGGTAB';
let Y = 'GXTXAYB';
let m = X.length;
let n = Y.length;

function lcs(X, Y, m, n) {
  // Base case
  if (m == 0 || n == 0) return 0;

  // If chars are the same, remove from both arrays and add 1 tot he result
  if (X[m - 1] == Y[n - 1]) return 1 + lcs(X, Y, m - 1, n - 1);
  // If they are different we need to search by removing the last element from both arrays separately
  else return max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n));
}

// Using Memoization
function lcsMemo(X, Y, m, n, dp) {
  // Base case
  if (m == 0 || n == 0) return 0;

  // If the result was previously computed return it
  if (dp[m][n] != -1) {
    return dp[m][n];
  }

  // If chars are the same, store the result recursively and return it
  if (X[m - 1] == Y[n - 1]) {
    dp[m][n] = 1 + lcs(X, Y, m - 1, n - 1);
  } else {
    // If they are different do the same
    dp[m][n] = max(lcs(X, Y, m, n - 1), lcs(X, Y, m - 1, n));
  }

  return dp[m][n];
}

// Using Tabulation
function lcsTab(X, Y, m, n) {
  // Build the matrix of results (each cell stores the result of the subarrays)
  var L = new Array(m + 1);
  for (var i = 0; i < L.length; i++) {
    L[i] = new Array(n + 1);
  }
  var i, j;

  // Fill the matrix bottom up
  for (i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      // Base case
      if (i == 0 || j == 0) {
        L[i][j] = 0;
      } else if (X[i - 1] == Y[j - 1]) {
        // If the chars match we update the next cell moving col and row
        L[i][j] = L[i - 1][j - 1] + 1;
      } else {
        // Iterate the next diagonal cell by finding the max of both sides
        L[i][j] = max(L[i - 1][j], L[i][j - 1]);
      }
    }
  }

  // The last cell contains the LCS of both full strings
  return L[m][n];
}
