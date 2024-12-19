

// Referência ao campo de entrada
    const percentageInput = document.getElementById('percentageInput');

    // Variável para controlar se o valor foi confirmado
    let confirmedValue = null;

    // Função para confirmar o valor ao pressionar Enter
    function confirmPercentage() {
        let value = parseFloat(percentageInput.value) || 0; // Pega o valor ou 0 se vazio
        confirmedValue = value.toFixed(2); // Define o valor confirmado
        percentageInput.value = confirmedValue; // Formata o campo
    }

    // Atualiza o campo ao digitar (substitui o valor anterior)
    percentageInput.addEventListener('input', function () {
        // Se o usuário começar a digitar, remove o valor confirmado anterior
        if (confirmedValue !== null) {
            confirmedValue = null; // Reseta o valor confirmado
        }
    });

    // Confirma o valor ao pressionar Enter
    percentageInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            confirmPercentage(); // Chama a função para formatar
        }
    });