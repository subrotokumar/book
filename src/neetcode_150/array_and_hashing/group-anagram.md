# [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/) 💛


Given an array of strings strs, group the anagrams together. You can return the answer in any order.
### Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]

    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]  

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.


### Example 2:
    Input: strs = [""]
    Output: [[""]]

### Example 3:
    Input: strs = ["a"]
    Output: [["a"]]


## Constraints:
1 <= strs.length <= 104  
0 <= strs[i].length <= 100  
strs[i] consists of lowercase English letters.  

---
### Approach 1: Group Anagrams by Sorting

Given a list of strings `strs = ["eat", "tea", "tan", "ate", "nat", "bat"]`, the goal is to group the anagrams together. Here's the step-by-step approach:

1. **Sort Each String:**  
   For every string in the input list, sort its characters alphabetically. This ensures that anagrams will result in the same sorted string.

   Example:
   ```
   strs =        ["eat", "tea", "tan", "ate", "nat", "bat"]
   sorted_strs = ["aet", "aet", "ant", "aet", "ant", "abt"]
   ```

2. **Group by Sorted Strings:**  
   Use a hashmap (dictionary) where the key is the sorted string, and the value is a list of strings that match that sorted string. Iterate through the `strs` list and group the original strings based on their sorted form.

   Result:
   ```
   result = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
   ```

### Complexity Analysis

**Time Complexity:**  
**O(N × KLogK)**, where:
- N is the number of strings in the input list.
- K is the length of the longest string.
- Sorting each string takes **O(KLogK)**, and we do this for all N strings.

**Space Complexity:**  
**O(N × K)**, where:
- The hashmap stores all the grouped anagrams, which requires space proportional to the total number of characters across all strings (N × K).

### Approach 2: Group Anagrams Using Character Counts

Instead of sorting each string, we can use the frequency of each character as the key to group anagrams. Here's how it works:

1. **Count Character Frequencies:**  
   For each string in the input list, create a frequency count of its characters. Use a tuple of 26 integers (for each letter 'a' to 'z') to represent the frequency.

2. **Group by Frequency Keys:**  
   Use a hashmap (dictionary) where the key is the character frequency tuple, and the value is a list of strings that match that frequency.

   Result:
   ```
   result = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
   ```

### Complexity Analysis

**Time Complexity:**  
**O(N × K)**, where:
- N is the number of strings in the input list.
- K is the length of the longest string.
- Counting characters takes **O(K)**, and we do this for all N strings.

**Space Complexity:**  
**O(N × K)**, where:
- The hashmap stores all the grouped anagrams, which requires space proportional to the total number of characters across all strings (N × K).

This approach is often faster than sorting-based grouping for longer strings, as it avoids the overhead of sorting.

```java
class Solution {
    private String getCharacterCountString(String str) {
        int[] count = new int[26];
        for (char ch : str.toCharArray()) {
            count[ch - 'a'] = count[ch - 'a'] + 1;
        }
        StringBuilder sb = new StringBuilder();
        for (int item : count) {
            sb.append("#");
            sb.append(item);
        }
        return sb.toString();
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        if (strs.length == 0) {
            return new ArrayList();
        }
        Map<String, List<String>> ansMap = new HashMap<>();

        for (String str : strs) {
            String countString = getCharacterCountString(str);
            if (!ansMap.containsKey(countString)) {
                ansMap.put(countString, new ArrayList());
            }
            ansMap.get(countString).add(str);
        }

        return new ArrayList(ansMap.values());
    }
}
```
