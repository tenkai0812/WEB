/*for loop*/
function forLoop(n) {
    let res = 0;
    for (let i = 1; i <= n; i++) {
        res += i;
    }
    return res;
}

/*while loop*/
function whileLoop(n) {
    let res = 0;
    let i = 1; 
    while (i <= n) {
        res += i;
        i++; 
    }
    return res;
}

/* while loop 比 for loop 自由度更高。在while循環中，我們可以自由的設計條件變量的初始化和更新步驟 */
/* for loop 的代碼更加緊湊，while loop的更加靈活 */

/*double loop*/
function nestedForLoop(n) {
    let res = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            res += `(${i}, ${j}), `;
        }
    }
    return res;
}
