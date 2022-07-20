const languageDropdown = document.querySelector(".language_choose");
const languageChooseMenu = document.querySelector(".dropdown_language");

console.log(languageDropdown);

languageDropdown.addEventListener("click", (event) => {
  console.log("mouseover");
  languageChooseMenu.classList.toggle("active");
});

/**********************************Navigation Aside */

const asideNav = document.querySelector(".aside_navigation");

console.log(asideNav);

asideNav.addEventListener("click", (Klohaus) => {
  console.log("event", Klohaus.target.innerHTML);
  let klo = Klohaus.target.innerHTML;

  let http = String(window.location.href).slice(
    window.location.href.length - 10,
    window.location.href.length
  );

  console.log(http);

  if (http === "index.html") {
    switch (klo) {
      case "Lounger":
        console.log("its Lounger...");
        window.location.assign("../assets/pages/lounger.html");
        break;
      case "Experience":
        window.location.assign("../assets/pages/experience.html");
        break;
      case "Inspiration":
        window.location.assign("../assets/pages/inspiration.html");
        break;
      case "Shop":
        window.location.assign("./shop.html");
        break;
    }
  } else {
    switch (klo) {
      case "About":
        window.location.assign("../../index.html");
        break;
      case "Lounger":
        console.log("its Lounger...");
        window.location.assign("./lounger.html");
        break;
      case "Experience":
        window.location.assign("./experience.html");
        break;
      case "Inspiration":
        window.location.assign("./inspiration.html");
        break;
      case "Shop":
        window.location.assign("./shop.html");
        break;
    }
  }
});

/********************************************inspiration */

let isVideoPlaying = true;

let player = document.querySelector(".magical_home");

if (player) {
  /*window.onload = (event) => {

    console.log("page is fully loaded");
    player.play();
  };*/

  player.addEventListener("click", () => {
    if (isVideoPlaying) {
      player.pause();
      isVideoPlaying = false;
    } else {
      player.play();
      isVideoPlaying = true;
    }
  });
}
