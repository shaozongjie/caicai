// document.documentElement.style.fontSize = 
//     document.documentElement.clientWidth /3.75+"px";

// window.onresize = function(){
//     console.log("宽",document.documentElement.clientWidth)

//     document.documentElement.style.fontSize =
//         document.documentElement.clientWidth / 375 + "px";
// }

;(function(win) {
    let tid;
    function refreshRem() {
        let designSize = 1920; // 设计图尺寸
        let html = document.documentElement;
        let wW = html.clientWidth;// 窗口宽度
        console.log(wW)
        let rem = wW * 100 / designSize; 
        document.documentElement.style.fontSize = rem + 'px';
    }
 
win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 200);
}, false);
win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 200);
    }
}, false);

refreshRem();

})(window);

// window.onresize = function(){
//     console.log("宽",document.documentElement.clientWidth)

//     document.documentElement.style.fontSize =
//         document.documentElement.clientWidth / 1920 + "px";
// }