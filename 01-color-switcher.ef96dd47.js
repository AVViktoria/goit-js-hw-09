const t={bcgColor:document.querySelector("body"),startButton:document.querySelector("[data-start]"),stopButton:document.querySelector("[data-stop]")};t.startButton.addEventListener("click",(function(){t.startButton.disabled=!0,t.stopButton.disabled=!1,o=setInterval((()=>{t.bcgColor.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopButton.addEventListener("click",e);let o=null;function e(){t.startButton.disabled=!1,t.stopButton.disabled=!0,clearInterval(o)}
//# sourceMappingURL=01-color-switcher.ef96dd47.js.map