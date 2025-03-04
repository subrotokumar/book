# [Encode and Decode Strings](https://www.geeksforgeeks.org/problems/encode-and-decode-strings/1) 💛

Given an array of strings s[], you are required to create an algorithm in the encode() function that can convert the given strings into a single encoded string, which can be transmitted over the network and then decoded back into the original array of strings. The decoding will happen in the decode() function.

You need to implement two functions:
1. encode(): This takes an array of strings s[] and encodes it into a single string. 
2. decode(): This takes the encoded string as input and returns an array of strings containing the original array as given in the encode method.

Note: You are not allowed to use any inbuilt serialize method.  

Example 1:

    Input: s = ["Hello","World"]
    Output: ["Hello","World"]

Explanation: The encode() function will have the str as input, it will be encoded by one machine. Then another machine will receive the encoded string as the input parameter and then will decode it to its original form.

Example 2:

    Input: s = ["abc","!@"]
    Output: ["abc","!@"]

Explanation: The encode() function will have the str as input, here there are two strings, one is "abc" and the other one has some special characters. It will be encoded by one machine. Then another machine will receive the encoded string as the input parameter and then will decode it to its original form.

### Constraints:
1<=s.size()<=100  
1<=s[i].size()<=100  
s[i] contains any possible characters out of the 256 ASCII characters.  

---

### Solution

```java
class Solution {

    public String encode(String s[]) {
        StringBuilder sb = new StringBuilder();
        for(int i=0;i<s.length-1;i++) {
            sb.append(s[i]);
            sb.append('#');
        }
        sb.append(s[s.length-1]);
        return sb.toString();
    }

    public String[] decode(String s) {
        return s.split("#");
    }
}
```