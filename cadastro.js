function voltarParaPagina1() {
    window.location.href = "index.html"; // Redireciona de volta para a primeira página
}

function toggleNightMode() {
    document.body.classList.toggle("night-mode");
}

// Função de validação da senha
function validarSenha(event) {
    event.preventDefault(); // Impede o envio do formulário

    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirma-senha').value;
    const mensagemErro = document.createElement('p');
    const form = document.getElementById('form');

    // Regex para validar a senha
    const regexSenha = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    // Verifica se a senha está de acordo com os critérios
    if (!regexSenha.test(senha)) {
        mensagemErro.textContent = "A senha deve ter no mínimo 8 caracteres, incluir uma letra maiúscula e um caractere especial.";
        mensagemErro.style.color = 'red';
        form.appendChild(mensagemErro); // Exibe a mensagem de erro
        return false; // Impede o envio do formulário
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmaSenha) {
        mensagemErro.textContent = "As senhas não coincidem.";
        mensagemErro.style.color = 'red';
        form.appendChild(mensagemErro); // Exibe a mensagem de erro
        return false; // Impede o envio do formulário
    }

    // Se tudo estiver correto, exibe a mensagem de sucesso e limpa o formulário
    document.getElementById('mensagem-sucesso').style.display = 'block';
    form.reset(); // Reseta o formulário após o sucesso

    // A mensagem de sucesso ficará visível por 3 segundos
    setTimeout(() => {
        document.getElementById('mensagem-sucesso').style.display = 'none';
    }, 3000);

    return false; // Impede o envio do formulário para simular sucesso
}