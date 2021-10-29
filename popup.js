let btn = document.getElementById("enable-btn");

btn.addEventListener("click", function() {
  browser.tabs.executeScript(null,{
    file: "content_script/main.js"
  });
});

browser.tabs.executeScript(null,{
  code: `console.log("Open Popup detected.");`
});
