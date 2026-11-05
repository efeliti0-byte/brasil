(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  var form = document.querySelector(".js-form");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var trap = form.querySelector('input[name="empresa_site"]');
    if (trap && trap.value) return;
    if (!form.reportValidity()) return;
    var data = new FormData(form);
    var text = [
      "Olá. Escrevo pelo site da FINANZA.",
      "Nome: " + data.get("nome"),
      "Telefone: " + data.get("telefone"),
      "Assunto: " + data.get("assunto"),
      "Mensagem: " + data.get("mensagem")
    ].join("\n");
    var url = "https://wa.me/5594981236141?text=" + encodeURIComponent(text);
    var status = document.querySelector(".form-status");
    var opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!status) return;
    status.hidden = false;
    status.textContent = opened
      ? "O WhatsApp foi aberto com a sua mensagem. O envio deste formulário não cria contrato nem representa aprovação de crédito."
      : "Se a janela não abriu, use o link para continuar no WhatsApp. O envio não cria contrato nem representa aprovação de crédito.";
    var link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = " Abrir WhatsApp.";
    status.appendChild(link);
  });
})();
