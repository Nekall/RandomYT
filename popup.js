let enableBtn = document.getElementById("enable-btn");
let disableBtn = document.getElementById("disable-btn");

enableBtn.addEventListener("click", function() {
  browser.tabs.executeScript(null,{
    file: "content_script/enable.js"
  });
});

disableBtn.addEventListener("click", function() {
  browser.tabs.executeScript(null,{
    file: "content_script/disable.js"
  });
});

browser.tabs.executeScript(null,{
  code: `console.log("Open Popup detected.");`
});
