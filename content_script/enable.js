console.log("HomePage random detected")
console.log("Actual URL :", window.location.toString());

if(window.location.toString() === "https://www.youtube.com/"){
  let arrThumbnail = document.querySelectorAll("#thumbnail");
  let randomInt = Math.floor(Math.random()*arrThumbnail.length);
  let view = document.querySelector("#container.style-scope.ytd-masthead");
  view.innerHTML +=`<div id="random-app-ext" style="position:absolute;top:0;left:0;width:100%;height:56px;z-index:2147483638;background-color:#202020;border-bottom:solid 2px #888888;color:white;font-size:20px;display:inline-flex;align-items:center;"> <div style="margin:0 10px;font-weight: bold;font-size: 20px;margin-right: 50px;">RANDOM-YT</div> <div style="width:200px;font-size: 15px;" id="num-videos">${arrThumbnail.length} videos found</div> <button style="border: solid 1px #202020;padding:8px;background-color:#383838;color:white;cursor:pointer;margin:10px;" id="load-btn">Load more videos</button> <button style="border: solid 1px #202020;padding:8px;background-color:#383838;color:white;cursor:pointer;margin:10px;" id="random-btn">Randomizer</button></div>`

  function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  };

  async function scrollPage(){
    for(let i=0; i<8; i++){
      let points = (".").repeat(i+1)
      document.getElementById("num-videos").innerHTML = `<div style="width:200px;font-size: 15px;" id="num-videos">Loading${points}</div>`
      scroll(0, 1000000);
      await sleep(2000);
    }
    await sleep(1500);
    arrThumbnail = document.querySelectorAll("#thumbnail");
    document.getElementById("num-videos").innerHTML = `<div id="num-videos">${arrThumbnail.length} videos found</div>`
  };

  let loadBtn = document.getElementById("load-btn");
  let randomBtn = document.getElementById("random-btn");

  loadBtn.addEventListener("click", function(){
    scrollPage();
  });

  randomBtn.addEventListener("click", function(){
    let url;
    arrThumbnail = document.querySelectorAll("#thumbnail");
    randomInt = Math.floor(Math.random()*arrThumbnail.length);
    window.open(`${arrThumbnail[randomInt].href}`, '_blank');
  });

}else{
  console.log("Go in YOUTUBE")
};
