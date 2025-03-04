# [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/discussion) 💚

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

#### Example 1:
    Input: 
    s = "A man, a plan, a canal: Panama"

    Output:
    true

**Explanation:**  
"amanaplanacanalpanama" is a palindrome.

#### Example 2:
    Input:  
    s = "race a car"

    Output:  
    false

**Explanation:**  
"raceacar" is not a palindrome.


#### Example 3:
    Input:  
    s = " "

    Output:  
    true

**Explanation:**  
An empty string reads the same forward and backward, so it is a palindrome.


#### Constraints:
- `1 <= s.length <= 2 * 10^5`  
- `s` consists only of printable ASCII characters.  


---

### Approach 1: Two Pointer Approach (O(n) time complexity, O(1) space complexity)

**Algorithm:**
1. Use two pointers, `i` starting from the beginning of the string and `j` from the end.
2. Move the pointers towards each other while skipping non-alphanumeric characters.
3. Convert the characters to lowercase and compare them.
4. If any pair of characters don't match, return `false`.
5. If the pointers cross each other without finding a mismatch, return `true`.

**Time Complexity:** O(n), where n is the length of the string.  
**Space Complexity:** O(1), as we only use a constant amount of extra space.

```java
class Solution {
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;

        while (i < j) { 
            char ch1 = Character.toLowerCase(s.charAt(i));
            char ch2 = Character.toLowerCase(s.charAt(j));

            // Skip non-alphanumeric characters
            if (!Character.isLetterOrDigit(ch1)) {
                i++;
                continue;
            }   
            if (!Character.isLetterOrDigit(ch2)) {
                j--;
                continue;
            }

            // Check for mismatch
            if (ch1 != ch2) {
                return false;
            }

            // Move pointers inward
            i++;
            j--;
        }

        return true;
    }
}
```

#### Explanation:
- We initialize two pointers `i` and `j` at the beginning and end of the string.
- For each pair of characters, we first skip non-alphanumeric characters and then compare the corresponding characters.
- If they are not equal, we return `false`. If the loop completes without finding a mismatch, we return `true`.

#### Edge Cases:
1. **Empty string**: An empty string is considered a palindrome.
2. **String with only non-alphanumeric characters**: After removing the non-alphanumeric characters, an empty string is considered a palindrome.
3. **Mixed cases**: The function converts all characters to lowercase before comparing them to ensure case insensitivity.

This solution ensures that we check the string efficiently and meet the problem's constraints.