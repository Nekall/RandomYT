if(window.location.href.indexOf("https://www.youtube.com/") > -1){
  let arrThumbnail = document.querySelectorAll("#thumbnail");
  let randomInt = Math.floor(Math.random()*arrThumbnail.length);
  let loadNumber = 25;
  let screenSize = 0;
  let view = document.getElementById("chips")? document.getElementById("chips") : document.getElementById("center");
  view.innerHTML +=`
  <div id="random-app-ext" style="user-select: none;position:absolute;top:0;left:0;width:100%;height:56px;z-index:2147483638;background-color:#202020;border-bottom:solid 2px #888888;color:white;font-size:20px;display:inline-flex;align-items:center;">
    <div style="margin:0 10px;font-weight: bold;font-size: 20px;margin-right: 10px;">RandomYT</div>
    <img style="filter: invert(100%) sepia(0%) saturate(1351%) hue-rotate(153deg) brightness(117%) contrast(100%);margin-right: 50px;" src="https://raw.githubusercontent.com/Nekall/RandomYT/main/icons/icon32.png">
    <div style="width:200px;font-size: 15px;" id="num-videos">${arrThumbnail.length} videos found</div>
    <input type="range" id="select-load-size" name="loadvids" min="25" max="200" value="25" step="25">
    <button style="min-width: 119px;border: solid 1px #202020;padding:8px;background-color:#383838;color:white;cursor:pointer;margin:10px;" id="load-btn">Load ~${loadNumber} videos</button>
    <button style="border: solid 1px #202020;padding:8px;background-color:#383838;color:white;cursor:pointer;margin:10px;" id="random-btn">Randomizer</button>
    <button style="min-width: 105px;height: 34px;border: solid 1px #202020;padding:8px;background-color:#383838;color:white;cursor:pointer;margin:10px;" id="random-stg-btn">Random letters</button>
  </div>`

  function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
  };

  async function scrollPage(){
    for(let i=0; i < (loadNumber/25); i++){
      let points = (".").repeat(i+1);
      document.getElementById("num-videos").innerHTML = `<div style="width:200px;font-size: 15px;" id="num-videos">Loading${points}</div>`
      screenSize += (200*loadNumber);
      scroll(0, screenSize);
      await sleep(2000);
    }
    await sleep(1500);
    arrThumbnail = document.querySelectorAll("#thumbnail");
    document.getElementById("num-videos").innerHTML = `<div id="num-videos">${arrThumbnail.length} videos found</div>`
  };

  let loadBtn = document.getElementById("load-btn");
  let randomBtn = document.getElementById("random-btn");
  let randomStringBtn = document.getElementById("random-stg-btn");
  let rangeInput = document.getElementById("select-load-size");

  loadBtn.addEventListener("click", function(){
    scrollPage();
  });

  randomBtn.addEventListener("click", function(){
    let url;
    arrThumbnail = document.querySelectorAll("#thumbnail");
    randomInt = Math.floor(Math.random()*arrThumbnail.length);
    window.open(`${arrThumbnail[randomInt].href}`, '_blank');
  });

  rangeInput.addEventListener('mouseup', function() {
    loadNumber = rangeInput.value;
    loadBtn.innerHTML = `Load ~${loadNumber} videos`
  });

  function newTab(randomStr){
    window.open(`https://www.youtube.com/results?search_query=${randomStr}`);
  }

  randomStringBtn.addEventListener("click",async function(){
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const length = 4;
    let randomStr = "";

    for (let i = 0; i < length; i++){

      for(let y = 0;y < 10; y++){
        const randomNumBis = Math.floor(Math.random() * chars.length);
        randomStringBtn.innerText =
        randomStr.length>0? `${randomStringBtn.innerText.slice(0, randomStr.length)}${chars[randomNumBis]}`: chars[randomNumBis];
        await sleep(50);
        randomStringBtn.innerText = randomStringBtn.innerText.slice(0, randomStr.length);
      }

      const randomNum = Math.floor(Math.random() * chars.length);
      randomStr += chars[randomNum];
      randomStringBtn.innerText = randomStr;
    }
    await sleep(1000);
    randomStringBtn.innerText = "Random letters";
    newTab(randomStr);
  });

}else{
  console.log("Go in YOUTUBE")
};
