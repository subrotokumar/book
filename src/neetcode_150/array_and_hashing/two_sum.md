# [Two Sum](https://leetcode.com/problems/two-sum/) 💚

#### Problem Statement:
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the `target`.

You may assume that each input will have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

#### Example 1:
**Input:**  
```java
nums = [2,7,11,15], target = 9
```

**Output:**  
```java
[0,1]
```

**Explanation:**  
Because `nums[0] + nums[1] == 9`, we return `[0, 1]`.

---

#### Example 2:
**Input:**  
```java
nums = [3,2,4], target = 6
```

**Output:**  
```java
[1,2]
```

---

#### Example 3:
**Input:**  
```java
nums = [3,3], target = 6
```

**Output:**  
```java
[0,1]
```

---

#### Constraints:
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

---

### Problem Analysis:

Given that we are looking for two numbers whose sum is equal to a target, this is a classic problem that can be solved in several ways, with varying time complexities. The main goal is to find a solution with a time complexity less than `O(n^2)`.

---

### Approaches:

#### 1. Brute Force Approach (O(n^2)):
A simple brute force solution would involve checking every possible pair of numbers in the array and checking if their sum equals the target.

**Algorithm:**
- Loop through all pairs of elements.
- If the sum of any pair equals the target, return the indices of the pair.

**Time Complexity:** O(n^2)

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{-1, -1};
    }
}
```

---

#### 2. Optimized Approach with Hash Map (O(n)):

Using a hash map allows us to store numbers and their indices as we iterate through the array. This reduces the need to check every pair.

**Algorithm:**
- Iterate through the array while storing each element and its index in a hash map.
- For each element, check if `target - element` exists in the hash map. If so, return the indices of both elements.

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int num2 = target - nums[i];
            if (map.containsKey(num2)) {
                return new int[]{map.get(num2), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }
}
```

**Explanation:**
- We iterate through the array once.
- For each number, we check if the complementary number (`target - nums[i]`) has been seen before using the hash map. If it has, return the indices.
- If not, we store the current number and its index in the map for future reference.

---

#### 3. Optimized Approach with Two Pointers (Only works if array is sorted) (O(n)):

This approach assumes that the array is sorted. It uses two pointers to check pairs of numbers whose sum equals the target.

**Algorithm:**
- Sort the array.
- Initialize two pointers: one at the start of the array, the other at the end.
- Move the pointers inward, checking if the sum of the numbers at the two pointers is equal to the target.

**Time Complexity:** O(n log n) (due to sorting)  
**Space Complexity:** O(1) (additional space)

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }
}
```