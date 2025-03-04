# [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/) ❤️

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

<img src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png">

    Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
    Output: 6
    Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

    Input: height = [4,2,0,3,2,5]
    Output: 9

### Constraints:

- n == height.length
- 1 <= n <= 2 \* 104
- 0 <= height[i] <= 105

---

### Approaches:

#### Brute Force

```java

```

#### Effective Solution - O(N) Time and O(N) Space

```java
public int trap(int[] height) {
    int total = 0;
    int n = height.length;
    int[] left = new int[n];
    int[] right = new int[n];
    left[0] = height[0];
    right[n - 1] = height[n - 1];
    for (int i = n - 2; i > 0; i--) {
        right[i] = Math.max(right[i + 1], height[i]);
    }
    for (int i = 1; i < n; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    for (int i = 1; i < n - 1; i++) {
        int x = Math.min(left[i], right[i]) - height[i];
        if (x > 0) {
            total += x;
        }
    }
    return total;
}
```

#### Optimal Solution - O(N) Time and O(N) Space

```java
class Solution {
    public int trap(int height[]) {
        int n = height.length;

        int left = 0;
        int right = n-1;

        int leftMax = height[left];
        int rightMax = height[right];

        int total = 0;

        while(left < right) {
            if (height[left] < height[right]) {
                leftMax = Math.max(leftMax, height[left]);
                if (leftMax - height[left] > 0) {
                    total = total + leftMax - height[left];
                }
                left++;
            } else {
                rightMax = Math.max(rightMax, height[right]);
                if (rightMax - height[right] > 0) {
                    total = total + rightMax - height[right];
                }
                right--;
            }
        }
        return total;
    }
}
```
