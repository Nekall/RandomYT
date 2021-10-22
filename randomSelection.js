let arrThumbnail = document.querySelectorAll("#thumbnail");
let randomInt = Math.floor(Math.random()*arrThumbnail.length);

//first step: scroll for load more videos
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function scrollPage(){
  for(let i=0; i<8; i++){
    scroll(0, 1000000);
    await sleep(2000);
  }
  await sleep(1500);
  clickOn();
}

//second step: gen random num and click
function clickOn(){
  arrThumbnail = document.querySelectorAll("#thumbnail");
  randomInt = Math.floor(Math.random()*arrThumbnail.length);
  console.log(`${arrThumbnail.length} videos found`);
  arrThumbnail[randomInt].click()
}

scrollPage();
