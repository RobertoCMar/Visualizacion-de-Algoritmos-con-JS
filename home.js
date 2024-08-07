const titleScreen = document.getElementById("title-container");
const mainMenu = document.getElementById("seleccion-algoritmo"); 
function start(){
   titleScreen.classList.add("hidding");

  setTimeout(() => {
   titleScreen.remove();   
  }, 1000);
  mainMenu.classList.remove("hidden");
  mainMenu.style.visibility = "hidden";
  mainMenu.style.opacity = "0";
  mainMenu.classList.add("animated-entrance");
}