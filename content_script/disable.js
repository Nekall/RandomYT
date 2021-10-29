console.log("Desactivate RandomYT"

if(window.location.toString() === "https://www.youtube.com/"){
  let navMenu = document.getElementById("random-app-ext");
  {navMenu !== null? window.location.reload(): ""}
  navMenu.remove();
}else{
  console.log("Go in YOUTUBE")
};
