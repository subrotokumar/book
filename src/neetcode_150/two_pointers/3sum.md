# [3Sum](https://leetcode.com/problems/3sum/description/) 💛

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


#### Example 1:

    Input: nums = [-1,0,1,2,-1,-4]
    Output: [[-1,-1,2],[-1,0,1]]
    Explanation: 
    nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
    nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
    nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
    The distinct triplets are [-1,0,1] and [-1,-1,2].
    Notice that the order of the output and the order of the triplets does not matter.

#### Example 2:

    Input: nums = [0,1,1]
    Output: []
    Explanation: The only possible triplet does not sum up to 0.

#### Example 3:

    Input: nums = [0,0,0]
    Output: [[0,0,0]]
    Explanation: The only possible triplet sums up to 0.


### Constraints:

- 3 <= nums.length <= 3000
- -105 <= nums[i] <= 105

---


### Approaches:

#### [Naive Approach] Generating All Triplets – O(n^3) Time and O(1) Space

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        int n = nums.length;

        for (int i = 0; i < n - 2; i++) {
            if(i!=0 || (i > 0 && nums[i] == nums[i-1])) {
                continue;
            }
            for (int j = i + 1; j < n - 1; j++) {
                if(j!=i + 1 || (j > i + 1 && nums[j] == nums[j-1])) {
                    continue;
                }
                for (int k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        res.add(Arrays.asList(nums[i], nums[j], num3[k]));
                    }
                }
            }
        }
        return res;
    } 
}
```

**Time Complexity:** O(n^2)  
**Space Complexity:** O(1)

#### HashSet - O(n^2) Time and O(n) Space

```java
class Solution {

}
```

**Time Complexity:** O(n^2)  
**Space Complexity:** O(n)


#### Two Pointer:

```java
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();

        Arrays.sort(nums);

        for(int index = 0; index < nums.length-2; index++) {
            if(index == 0 || (index > 0 && nums[index] != nums[index-1])) {
                twoSumII(index, nums, result);
            }
        }
        return result;
    }

    public void twoSumII(int index, int[] nums, List<List<Integer>> result) {
        int sum = -nums[index];

        int start = index+1;
        int end = nums.length - 1;

        while(start < end) {
            int num1 = nums[start], num2 = nums[end];
            
            if(num1 + num2 < sum) {
                start++;
            } else if(num1 + num2 > sum) {
                end--;
            } else {
                result.add(Arrays.asList(nums[index], num1, num2));
                start++;
                end--;

                while(num1 == nums[start] && start<end) {
                    start++;
                }
            }
        }
    }
}
```

**Time Complexity:** O(NLogN + N2)  
**Space Complexity:** O(1)
