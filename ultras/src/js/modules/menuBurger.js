export function initBurgerMenu() {
    const menuButton = document.getElementById("burger-menu1");
    const siteNav = document.getElementById("site-nav1");
  
    if (menuButton && siteNav) {
      menuButton.addEventListener("click", () => {
        siteNav.classList.toggle("open");
      });
    } else {
      console.log("Menu burger ou navigation introuvable");
    }
  }
  