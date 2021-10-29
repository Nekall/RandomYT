if(window.location.href.indexOf("https://www.youtube.com/") > -1){
  let navMenu = document.getElementById("random-app-ext");
  {navMenu !== null? window.location.reload(): ""}
  navMenu.remove();
}else{
  console.log("Go in YOUTUBE")
};
