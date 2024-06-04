function adicionarAoCarrinho() {
    // Obter dados do formulário
    var tamanho = document.getElementById('tamanho').value;
    var quantidade = document.getElementById('quantidade').value;

    // Validar se o tamanho foi selecionado
    if (tamanho === "") {
        alert("Por favor, selecione um tamanho.");
        return;
    }

    // Simular adicionar ao carrinho (você precisa implementar isso)
    alert("Produto adicionado ao carrinho:\nTamanho: " + tamanho + "\nQuantidade: " + quantidade);
}

function removerItem(botao) {
    var linhaProduto = botao.parentNode.parentNode; // Obtém a linha do produto
    linhaProduto.parentNode.removeChild(linhaProduto); // Remove a linha do produto
}
function removerItem(botao) {
    var linhaProduto = botao.closest('tr'); // Obtém a linha do produto
    linhaProduto.parentNode.removeChild(linhaProduto); // Remove a linha do produto
}

