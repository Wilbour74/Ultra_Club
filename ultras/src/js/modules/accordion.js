export function initAccordions() {
    const accordions = document.getElementsByClassName("accordion");
    if (accordions.length > 0) {
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
          this.classList.toggle("active");
          const panel = this.nextElementSibling;
          if (panel) {
            panel.style.display = panel.style.display === "block" ? "none" : "block";
          }
        });
      }
    }
  }
  