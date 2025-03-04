# [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/description/) 💛

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.


Example 1:

    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9
 

### Constraints:

0 <= nums.length <= 105  
-109 <= nums[i] <= 109  

---
### Approach 1: Sorting

This approach sorts the input array and finds the longest consecutive sequence by iterating through the sorted array. Consecutive numbers are counted, and the maximum sequence length is tracked.

#### Code:
```java
class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) {
            return 0;
        }
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
        
        int max = 1;
        int currentMax = 1;
        for(int i = 1; i < nums.length; i++) {
            if(nums[i] == nums[i - 1]) {
                continue;
            } else if (nums[i] == nums[i - 1] + 1) {
                currentMax++;
            } else {
                currentMax = 1;
            }
            max = Math.max(max, currentMax);
        }
        return max;
    }
}
```

#### Complexity Analysis:
- **Time Complexity:** O(N log N), where N is the number of elements in the input array. This is due to the sorting step.
- **Space Complexity:** O(1) (if sorting in place) or O(N) (if additional space is used for sorting).

---

### Approach 2: Using HashSet

This approach leverages a HashSet to store all unique numbers from the array. By iterating through the set, the algorithm checks for consecutive sequences, starting with numbers that do not have a preceding number in the set.

#### Code:
```java
class Solution {
    public int longestConsecutive(int[] nums) {
        if(nums.length == 0) {
            return 0;
        }
        Set<Integer> set = new HashSet<>();
        for(int num : nums) {
            set.add(num);
        }

        int longestSub = 1;
        for(int num : set) {
            if(set.contains(num - 1)) {
                continue;
            }

            int currentNum = num;
            int currentMax = 1;
            while(set.contains(currentNum + 1)) {
                currentNum++;
                currentMax++;
            }
            longestSub = Math.max(currentMax, longestSub);
        }
        return longestSub;
    }
}
```

#### Complexity Analysis:
- **Time Complexity:** O(N), where N is the number of elements in the input array. Each number is processed once in the worst case.
- **Space Complexity:** O(N), for the HashSet to store the elements.

