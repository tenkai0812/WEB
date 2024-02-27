function writeTest() {
    var newHTML = "<div><h1>Hi,there</h1></div>";
    document.write(newHTML);
    document.close();
}

function elementTest() {
    var newDiv = document.createElement("div");
    newDiv.innerHTML ="<h1>hi,there</h1>";
    document.body.appendChild(newDiv);
}

writeTest();
elementTest();

//DOM替代方案，document.createElement更適合的地方使用 document.write是個anti pattern
//document.write有許多缺點，如果他在頁面載入後執行，或複寫所載的頁面。
