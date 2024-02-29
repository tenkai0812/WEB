// 算法 A 的時間複雜度：常數階
function algorithm_A(n) {
    console.log(0);
}
// 算法 B 的時間複雜度：線性階
function algorithm_B(n) {
    for (let i = 0; i < n; i++) {
        console.log(0);
    }
}
// 算法 C 的時間複雜度：常數階
function algorithm_C(n) {
    for (let i = 0; i < 1000000; i++) {
        console.log(0);
    }
}

function algorithm(n) {
    let a = 1;  
    a = a + n; 
    for (let i = 0; i < 5 * n + 1; i++) {
        console.log(0);
    }
    for (let i = 0; i < 2 * n; i++) {
        for (let j = 0; j < n + 1; j++) {
            console.log(0);
        }
    }
}

// O(1)
function constant(n) {
    let count = 0;
    const size = 100000;
    for (let i = 0; i < size; i++) count++;
    return count;
}

//O(n)
function linear(n) {
    let count = 0;
    for (let i = 0; i < n; i++) count++;
    return count;
}

function arrayTraversal(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count++;
    }
    return count;
}

//O(n2)
function quadratic(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++;
        }
    }
    return count;
}

function bubbleSort(nums) {
    let count = 0; 
    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
                count += 3; 
            }
        }
    }
    return count;
}

//O(2n)
function exponential(n) {
    let count = 0,
        base = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < base; j++) {
            count++;
        }
        base *= 2;
    }
    return count;
}

function expRecur(n) {
    if (n === 1) return 1;
    return expRecur(n - 1) + expRecur(n - 1) + 1;
}

//O(logn)
function logarithmic(n) {
    let count = 0;
    while (n > 1) {
        n = n / 2;
        count++;
    }
    return count;
}

function logRecur(n) {
    if (n <= 1) return 0;
    return logRecur(n / 2) + 1;
}
//O(nlogn)
function linearLogRecur(n) {
    if (n <= 1) return 1;
    let count = linearLogRecur(n / 2) + linearLogRecur(n / 2);
    for (let i = 0; i < n; i++) {
        count++;
    }
    return count;
}
//O(n!)
function factorialRecur(n) {
    if (n === 0) return 1;
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += factorialRecur(n - 1);
    }
    return count;
}

function randomNumbers(n) {
    const nums = Array(n);
    for (let i = 0; i < n; i++) {
        nums[i] = i + 1;
    }
    for (let i = 0; i < n; i++) {
        const r = Math.floor(Math.random() * (i + 1));
        const temp = nums[i];
        nums[i] = nums[r];
        nums[r] = temp;
    }
    return nums;
}

function findOne(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            return i;
        }
    }
    return -1;
}