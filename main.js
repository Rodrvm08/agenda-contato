const formulario = document.getElementById("form-agenda");
const nomes = [];
const contato = [];
const tBody = document.querySelector("tbody");
let linhas = '';


formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarDados();
    atualizaTabela();
});

function adicionarDados() {
    const inputNome = document.getElementById("inputNome");
    const inputTel = document.getElementById("inputTel");

    if (nomes.includes(inputNome.value) || contato.includes(inputTel.value)) {
        alert('Nome ou telefone já cadastrado!');
    } else {
        nomes.push(inputNome.value);
        contato.push(inputTel.value);

        let linha =`<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTel.value}</td>`;;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNome.value = '';
    inputTel.value = '';


    inputNome.focus();    
}

function atualizaTabela() {
    const tBody = document.querySelector("tbody");
    tBody.innerHTML = linhas;
}