document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;

  // Verifique se as credenciais são válidas (email e senha estão corretos)
  var credentialsValid = checkCredentials(email, password);
  
  if (credentialsValid) {
    // Se as credenciais são válidas, redirecione para a página principal
    window.location.href = "pagina_principal.html";
  } else {
    // Se as credenciais não são válidas, mostre uma mensagem de erro
    document.getElementById("errorMessage").classList.remove("hidden");
  }
});

function checkCredentials(email, password) {
  // Aqui você pode adicionar a lógica para verificar se as credenciais são válidas
  // Você pode armazenar os 20 emails e códigos em arrays e comparar com os dados fornecidos
  // Vou fornecer um exemplo simples:

  var storedEmails = ["email1@example.com", "email2@example.com", ...];
  var storedPasswords = ["password1", "password2", ...];

  for (var i = 0; i < storedEmails.length; i++) {
    if (email === storedEmails[i] && password === storedPasswords[i]) {
      return true; // Credenciais válidas
    }
  }

  return false; // Credenciais inválidas
}
