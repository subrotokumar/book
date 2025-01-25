# [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/) 💛

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]

Example 2:

    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]
 

### Constraints:

2 <= nums.length <= 105  
-30 <= nums[i] <= 30  
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.  
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)  

---

### Problem: Product of Array Except Self

The task is to calculate a new array `result` such that each element at index `i` of the array `result` is the product of all the elements of the input array `nums` except the one at index `i`. You cannot use division, and the solution must run in \(O(n)\) time.

---

### Approach 1: Using Prefix and Postfix Arrays

This approach calculates the **prefix product** and **postfix product** for each element, then combines them to get the result.

#### Explanation:

1. **Initialize Helper Arrays**:
   - `prefixProduct[i]` holds the product of all elements before index `i`.
   - `postfixProduct[i]` holds the product of all elements after index `i`.

2. **Calculate Prefix Products**:
   - Start with `prefixProduct[0] = 1` (no elements before the first element).
   - For each index `i`, calculate:
     ```
     prefixProduct[i] = prefixProduct[i-1] * nums[i-1];
     ```

3. **Calculate Postfix Products**:
   - Start with `postfixProduct[len-1] = 1` (no elements after the last element).
   - For each index `i` (from right to left):
     ```
     postfixProduct[i] = postfixProduct[i+1] * nums[i+1];
     ```

4. **Combine Prefix and Postfix Products**:
   - For each index `i`, calculate the result as:
     ```
     ans[i] = prefixProduct[i] * postfixProduct[i];
     ```

5. **Time Complexity**:
   - Prefix computation: \(O(n)\).
   - Postfix computation: \(O(n)\).
   - Final combination: \(O(n)\).


```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int[] prefixProduct = new int[len];
        int[] postfixProduct = new int[len];
        int[] ans = new int[len];

        prefixProduct[0] = 1;
        postfixProduct[len - 1] = 1;

        for (int i = 1; i < nums.length; i++) {
            prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
        }

        for (int i = nums.length - 2; i >= 0; i--) {
            postfixProduct[i] = postfixProduct[i + 1] * nums[i + 1];
        }

        for (int i = 0; i < len; i++) {
            ans[i] = prefixProduct[i] * postfixProduct[i];
        }

        return ans;
    }
}
```

### Approach 2: Optimized Solution Without Extra Space

This approach avoids using extra arrays for prefix and postfix products by calculating the result directly in one pass for prefix and one pass for postfix.

#### Explanation:

1. **Initialize the Result Array**:
   - The `result` array will hold the prefix product in the first pass.

2. **Calculate Prefix Products**:
   - Use a variable `pre` to keep track of the running prefix product.
   - For each index `i`, set:
     ```
     result[i] = pre;
     pre = pre * nums[i];
     ```

3. **Calculate Postfix Products**:
   - Use a variable `post` to keep track of the running postfix product.
   - Traverse from right to left and update `result` as:
     ```
     result[i] = result[i] * post;
     post = post * nums[i];
     ```

4. **Time Complexity**:
   - Prefix computation: \(O(n)\).
   - Postfix computation: \(O(n)\).
   - Space complexity: \(O(1)\) (ignoring output array).

```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] result = new int[nums.length];
        int pre = 1, post = 1;

        for (int i = 0; i < nums.length; i++) {
            result[i] = pre; 
            pre = pre * nums[i];
        }

        for (int i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * post;
            post = post * nums[i];
        }

        return result;
    }
}
```

### Key Differences Between the Approaches:

| **Feature**           | **Approach 1**                  | **Approach 2**                     |
|------------------------|----------------------------------|-------------------------------------|
| **Space Complexity**   | \(O(n)\) (extra arrays)         | \(O(1)\) (no extra arrays)         |
| **Implementation**     | Easier to understand            | Slightly more optimized            |
| **Performance**        | Similar runtime \(O(n)\)        | Similar runtime \(O(n)\)