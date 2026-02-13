const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("open");
    mobileMenu.classList.toggle("open", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const telefone = document.getElementById("telefone")?.value?.trim() || "";
    const endereco = document.getElementById("endereco")?.value?.trim() || "";
    const assunto = document.getElementById("assunto")?.value?.trim() || "";
    const mensagem = document.getElementById("mensagem")?.value?.trim() || "";

    if (!nome || !email || !assunto || !mensagem) {
      if (formMsg) formMsg.textContent = "Preencha Nome, Email, Assunto e Mensagem.";
      return;
    }

    const to = "comercial@engimasengenharia.com.br";
    const subject = encodeURIComponent(assunto);
    const body = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}\n\nMensagem:\n${mensagem}\n`
    );

    if (formMsg) formMsg.textContent = "Abrindo seu e-mail…";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
