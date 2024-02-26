/* recursive */
function recur(n) {
    // end condition
    if (n === 1) return 1;
    const res = recur(n - 1);
    return n + res;
}