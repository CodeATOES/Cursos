$(document).ready(function() {
    var emails = ["alexandrefrancisco01998@gmail.com", "amarcalo21@gmail.com", "issasambo123@gmail.com", "njmuleia2024@gmail.com" ]; // Insira aqui os emails válidos
    var codigos = ["849431020", "03012024", "150996","njmuleia2024" ]; // Insira aqui os códigos correspondentes

    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var email = $("#emailInput").val();
        var senha = $("#passwordInput").val();

        // Verifica se o email e a senha correspondem
        var index = emails.indexOf(email);
        if (index !== -1 && codigos[index] === senha) {
            // Redirecionar para a página principal
            window.location.href = "pagina_principal.html";
        } else {
            // Exibir mensagem de erro
            $("#message").text("Email ou senha incorretos");
        }
    });
});
 
