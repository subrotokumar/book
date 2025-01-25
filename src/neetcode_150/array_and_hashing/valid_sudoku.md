# [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/) 💛


Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:

![sudoku](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

    Input: board = 
    [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]

    Output: true

Example 2:

    Input: board = 
    [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]

    Output: false
    Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9  
board[i].length == 9  
board[i][j] is a digit 1-9 or '.'.  

---
### Approach: Using HashMap for Sudoku Validation

This approach uses a HashMap to track seen characters in rows, columns, and sub-boxes while iterating through the Sudoku board.

```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        final int N = 9;
    
        Map<String, Set<Character>> map = new HashMap<>();

        for(int i = 0; i < N; i++) {
            map.put("R" + i, new HashSet<>()); // Row
            map.put("C" + i, new HashSet<>()); // Column
            map.put("B" + i, new HashSet<>()); // Box
        }

        for(int r = 0; r < N; r++) {
            for(int c = 0; c < N; c++) {
                char ch = board[r][c];
                int box = r / 3 * 3 + c / 3;

                if(ch == '.') {
                    continue;
                }

                if(
                    map.get("R" + r).contains(ch) ||
                    map.get("C" + c).contains(ch) ||
                    map.get("B" + box).contains(ch)
                ) {
                    return false;
                }

                map.get("R" + r).add(ch);
                map.get("C" + c).add(ch);
                map.get("B" + box).add(ch);
            }
        }
        return true;
    }
}
```

#### Complexity Analysis:

**Time Complexity**: O(N²), where N = 9 (constant board size). Iterates through each cell of the board once.

**Space Complexity**: O(N²), for storing sets in the HashMap to track characters in rows, columns, and boxes.

