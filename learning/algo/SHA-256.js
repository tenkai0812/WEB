// Resources: https://geraintluff.github.io/sha256/
// input for ascii code to make hash number 
// for the proof work we need to optimal pur code
// the minified version is less than a kilobyte
var sha256 = function sha256(ascii){
    //instead of ascii you need to rotate for input
    function rightRotate(value, amount){
        return (value >>> amount) | (value << (32 - amount));
    }
}