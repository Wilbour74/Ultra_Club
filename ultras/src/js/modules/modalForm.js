export function initModalForm() {
    const modal = document.getElementById("modalForm");
    const openModalBtns = document.querySelectorAll(".open-modal-btn");
    const connexionBtn = document.getElementById("connexion");
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.querySelector(".button.button-psg");
    const nameField = document.getElementById("name");
    const confirmPassword = document.getElementById("confirm-password")?.parentElement;
    const genreField = document.getElementById("club")?.parentElement;
    const newsletter = document.querySelector(".validation");

    let isLogin = false;

    // Gestion de l'ouverture de la modal avec plusieurs boutons
    if (modal && openModalBtns.length > 0) {
        const openModal = () => {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
        };

        const closeModal = () => {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        };

        openModalBtns.forEach((btn) => {
            btn.addEventListener("click", openModal);
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("active")) {
                closeModal();
            }
        });
    }

    // Gestion du bouton "Connexion" et du formulaire
    if (connexionBtn) {
        connexionBtn.addEventListener("click", (e) => {
            e.preventDefault();
            isLogin = !isLogin;

            if (isLogin) {
                formTitle.textContent = "Connexion";
                submitBtn.textContent = "Se connecter";
                nameField.style.display = "none";
                confirmPassword.style.display = "none";
                genreField.style.display = "none";
                newsletter.style.display = "none";
                connexionBtn.textContent = "Inscription";
            } else {
                formTitle.textContent = "Inscription";
                submitBtn.textContent = "S'inscrire";
                nameField.style.display = "flex";
                confirmPassword.style.display = "flex";
                genreField.style.display = "flex";
                newsletter.style.display = "flex";
                connexionBtn.textContent = "Connexion";
            }
        });
    }
}
