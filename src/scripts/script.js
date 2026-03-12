function enviarWhatsApp() {
  // Captura os valores
  const nome = document.getElementById("nome-form").value.trim();
  const email = document.getElementById("email-form").value.trim();
  const assunto = document.getElementById("assunto-form").value.trim();
  const mensagem = document.getElementById("mensagem-form").value.trim();

  // Validação simples
  if (nome === "") {
    alert("Por favor, preencha seu nome.");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor, insira um e-mail válido.");
    return false;
  }
  if (assunto === "") {
    alert("Por favor, preencha o assunto.");
    return false;
  }
  if (mensagem === "") {
    alert("Por favor, digite sua mensagem.");
    return false;
  }

  // Monta a mensagem
  const texto = `*Formulário de Contato*\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*Assunto:* ${assunto}\n*Mensagem:* ${mensagem}`;
  const numero = "5551993866634"; // Substitua pelo seu número
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // Abre o WhatsApp
  window.open(url, "_blank");
  return true;
}
