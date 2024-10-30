document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("cadastro").classList.remove("hidden");
});

document.getElementById("backBtn").addEventListener("click", function() {
    document.getElementById("main-content").classList.remove("hidden");
    document.getElementById("cadastro").classList.add("hidden");
});

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert("Cadastro realizado com sucesso!");

    // Exibe a tela da conta
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("conta").classList.remove("hidden");
});

document.getElementById("toggleSaldoBtn").addEventListener("click", function() {
    const saldo = document.getElementById("saldo");
    saldo.classList.toggle("hidden");
    this.textContent = saldo.classList.contains("hidden") ? "Mostrar Saldo" : "Esconder Saldo";
});

// Exemplo de ações para os novos botões
document.getElementById("pixBtn").addEventListener("click", function() {
    alert("Função Pix ainda não implementada.");
});

document.getElementById("transferenciaBtn").addEventListener("click", function() {
    alert("Função Transferência ainda não implementada.");
});

document.getElementById("pagamentoBtn").addEventListener("click", function() {
    alert("Função Pagamento ainda não implementada.");
});

document.getElementById("extratoBtn").addEventListener("click", function() {
    alert("Função Extrato ainda não implementada.");
});

document.getElementById("configuracoesBtn").addEventListener("click", function() {
    alert("Função Configurações ainda não implementada.");
});
