const ONE_MINUTES_READING_TEXT = 400;

const getCalcResult = () => {
    var tmpCount = document.getElementsByTagName("section")[0].innerText.length;
    let resultMsg = "記事を開いて下さい!"
    if(tmpCount !== 0) {
        let readTime = Math.round(strCount / ONE_MINUTES_READING_TEXT);
        resultMsg = "この記事は".concat(readTime).concat("分くらいで読み終わります！") ;
    }
    alert("aaa")
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "myAction") {
        getCalcResult();
    }
}); 