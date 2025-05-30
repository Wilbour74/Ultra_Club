
import { initBurgerMenu } from "./modules/menuBurger.js";
import { initAccordions } from "./modules/accordion.js";
import { initModalForm } from "./modules/modalForm.js";
import { setupToggleTeams } from './modules/toggleTeams.js';



document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initAccordions();
  initModalForm();
  setupToggleTeams();
});
