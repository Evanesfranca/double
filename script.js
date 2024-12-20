const bancaInput = document.getElementById("bancaInput");
const percentInput = document.getElementById("percentInput");
const tableBody = document.getElementById("tableBody");

function updateResults() {
    const banca = parseFloat(bancaInput.value) || 0;
    const percent = parseFloat(percentInput.value) || 0;

    // Limpa as linhas anteriores antes de adicionar as novas
    tableBody.innerHTML = '';

    // Gerando as linhas da tabela
    for (let i = 1; i <= 100; i++) {
        // Calcula o denominador
        let denominator = 100 - (i * 5);

        // Garantir que o denominador nunca seja menor que 1
        if (denominator <= 0) {
            denominator = 1; // Impede divisão por zero ou valores negativos
        }

        // Calcula o resultado normalmente
        const result = (banca / denominator) * (percent / 100);
        
        const row = document.createElement('tr');

        const alertCell = document.createElement('td');
        alertCell.textContent = `${i}`;
        
        const betCell = document.createElement('td');
        betCell.classList.add('bold');
        betCell.innerHTML = `R$ ${result.toFixed(2)}`;

        const riskCell = document.createElement('td');
        // Adicionar qualquer lógica de estilo para a célula de risco, se necessário

        row.appendChild(alertCell);
        row.appendChild(betCell);
        row.appendChild(riskCell);

        tableBody.appendChild(row);
    }
}

// Atualiza os resultados quando os inputs mudam
bancaInput.addEventListener("input", updateResults);
percentInput.addEventListener("input", updateResults);
