// ====== MODO ESCURO COM LOCALSTORAGE ======
const toggle = document.getElementById("darkToggle");

document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("dark-mode") === "true";
  if (darkMode) {
    document.body.classList.add("dark");
    toggle.checked = true;
  }
});

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("dark-mode", toggle.checked);
});

// ====== MODAL DE PROJETOS ======
const projetos = document.querySelectorAll(".projetos");

// cria modal dinamicamente
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <h2>Título do Projeto</h2>
    <p>Descrição detalhada do projeto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at bibendum odio.</p>
    <button class="close-modal">Fechar</button>
  </div>
`;
document.body.appendChild(modal);

const modalContent = modal.querySelector(".modal-content");
const closeModal = modal.querySelector(".close-modal");

projetos.forEach((proj, i) => {
  proj.addEventListener("click", () => {
    modal.style.display = "flex";
    modalContent.querySelector("h2").textContent = `Projeto ${i + 1}`;
    modalContent.querySelector("p").textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Projeto ${i + 1} criado para fins de demonstração.`;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
