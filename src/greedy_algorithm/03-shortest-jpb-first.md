# Shortest Job First (or SJF) CPU Scheduling

The shortest job first (SJF) or shortest job next, is a scheduling policy that selects the waiting process with the smallest execution time to execute next.

Given an array of integers bt of size n. Array bt denotes the burst time of each process. Calculate the average waiting time of all the processes and return the nearest integer which is smaller or equal to the output.

Note: Consider all process are available at time 0.


Input:  
n = 5  
bt = [4,3,7,1,2]  
Output: 4  
Explanation: After sorting burst times by shortest job policy, calculated average waiting time is 4.  


```
T = [ 4, 3, 7, 1, 2 ]  
      p1 p2 p3 p4 p5


      p1  -->  0
      p5  -->  1
      p2  -->  2
      p1  -->  3
      p3  -->  4


    0 --- 1 --- 3 --- 6 --- 10 --- 13
       p4    p5    p2    p1     p3

```

Approach:
1. Sort

```java
import java.util.*;

class Solution {
    static int solve(int bt[] ) {
        if (bt==null || bt.length == 0) {
            return 0;
        }
        
        Arrays.sort(bt);
        int timer = 0;
        int sum = 0;
        
        for(int value: bt){
            sum+=timer;
            timer += value;
        }
        return sum/bt.length;
    }   
}
```

Time Complexity: **O(nlog(n))**  
Auxiliary Space: **O(1)** 

Source: [GeeksForGeeks](https://www.geeksforgeeks.org/problems/shortest-job-first/1)