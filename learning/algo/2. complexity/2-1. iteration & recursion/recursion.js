/* recursion */
function recur(n) {
    // end condition
    if (n === 1) return 1;
    const res = recur(n - 1);
    return n + res;
}

/* tail recursion */
function tailRecur(n, res) {
    if (n === 0) return res;
    return tailRecur(n - 1, res + n);
}

/* Fibonacci recursion */
function fib(n) {
    if (n === 1 || n === 2) return n - 1;
    const res = fib(n - 1) + fib(n - 2);
    return res;
}

/* iteration simulation recursion */
function forLoopRecur(n) {
    const stack = [];
    let res = 0;
    for (let i = n; i > 0; i--) {
        stack.push(i);
    }
    while (stack.length) {

        res += stack.pop();
    }
    return res;
}
