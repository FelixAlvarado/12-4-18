// Given an array A, partition it into two (contiguous) subarrays left and right so that:

// Every element in left is less than or equal to every element in right.
// left and right are non-empty.
// left has the smallest possible size.
// Return the length of left after such a partitioning.  It is guaranteed that such a partitioning exists.

// Example 1:

// Input: [5,0,3,8,6]
// Output: 3
// Explanation: left = [5,0,3], right = [8,6]
// Example 2:

// Input: [1,1,1,0,6,12]
// Output: 4
// Explanation: left = [1,1,1,0], right = [6,12]

var partitionDisjoint = function(A) {
    let index = 0;
    let first = A[0];
    let leftMax = A[0];
    let currentMax = A[0];
    for(let i = 1; i < A.length; i++){
        if(A[i] < first || A[i] < leftMax){
            index = i;
            if(currentMax > leftMax) leftMax = currentMax;
        }
        
        if(A[i] > currentMax) {
            currentMax = A[i];
        }
        
    }

    return index + 1;
};