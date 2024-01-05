const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Array com os e-mails e códigos
const users = [
    { email: 'user1@example.com', code: '12345' },
    { email: 'user2@example.com', code: '54321' },
    // Adicione mais usuários aqui
];

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value;
    const code = passwordInput.value;

    const user = users.find(user => user.email === email && user.code === code);

    if (user) {
        // Login bem sucedido, redirecionar para a página principal
        window.location.href = 'pagina_principal.html';
    } else {
        // Login inválido, exibir mensagem de erro
        errorMessage.textContent = 'E-mail ou código inválido';
        errorMessage.style.color = 'red';
    }
});
