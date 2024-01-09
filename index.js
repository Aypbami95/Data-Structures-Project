
// This function finds the sum of distinct elements in two sets
function sumDistinct(arr1, arr2) {

    // Create a sum counter
    let sum = 0;

    // Check if num is duplicate
    for(let num of arr1) {
        if(!arr2.includes(num)) {
            sum += num;
        }
    }

    for(let num of arr2) {
        if(!arr1.includes(num)) {
            sum += num;
        }
    }

    return sum;
}



console.log(sumDistinct([3,1,7,9],  [2,4,1,9,3]));


// This function calculates the dot product of two vectors
function dotProduct(vec1, vec2) {
    
    let ps = 0;

    // Algorithm for calculating (dotProduct = a1b1 + a2b2)
    for(let i = 0; i < vec1.length; i++) {
        for(let j = 0; j < vec2.length; j++) {
            if(i == j) {
                ps += vec1[i] * vec2[j];
                break;
            }
        }
    }

    return ps;
}


// This function checks if the dot product of two vectors is equal to zero
function checkOrthogonal(vec1, vec2) {
    const result = dotProduct(vec1, vec2);

    if(result == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(dotProduct([1,2,3], [2,4,2]));

console.log(checkOrthogonal([1,2], [2, -1]))