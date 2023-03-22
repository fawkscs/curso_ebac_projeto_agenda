$(document).ready(function () {
    $("#telefone").inputmask({
        mask: "(99) 99999-9999",
        keepStatic: true,
        removeMaskOnSubmit: false
    });
});

// Seleciona o formulário e a tabela
const formContato = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

// Adiciona um evento de envio de formulário
formContato.addEventListener('submit', (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Seleciona os campos de nome e telefone
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Cria uma nova linha na tabela com os valores inseridos no formulário
    const novaLinha = tabelaContatos.insertRow();
    const colunaNome = novaLinha.insertCell();
    const colunaTelefone = novaLinha.insertCell();
    colunaNome.innerText = nome;
    colunaTelefone.innerText = telefone;

    document.getElementById("tabela-contatos").style.display = "table";
    document.getElementById("contatos-cadastrados").style.display = "inline";

    // Limpa os campos do formulário
    formContato.reset();

});

const table = document.getElementById('tabela-contatos');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

if (tbody.rows.length > 0) {
    thead.style.display = 'table-header-group';
}


