// Lista que guarda todas as tecnologias cadastradas
let tecnologias = [];

// Função responsável pelo cadastro
function cadastrarTecnologia() {

    // Captura os valores digitados
    let nome = document.getElementById("nome").value.trim();
    let descricao = document.getElementById("descricao").value.trim();

    // Verifica se algum campo está vazio
    if(nome === "" || descricao === ""){
        alert("Preencha todos os campos.");
        return;
    }

    // Verifica se a tecnologia já foi cadastrada
    let repetida = tecnologias.find(
        tecnologia =>
        tecnologia.nome.toLowerCase() === nome.toLowerCase()
    );

    if(repetida){
        alert("Essa tecnologia já foi cadastrada.");
        return;
    }

    // Cria o objeto da tecnologia
    let tecnologia = {
        nome,
        descricao
    };

    // Adiciona ao vetor
    tecnologias.push(tecnologia);

    // Atualiza a tela
    mostrarTecnologias();

    // Limpa os campos
    document.getElementById("nome").value = "";
    document.getElementById("descricao").value = "";
}

// Exibe todas as tecnologias cadastradas
function mostrarTecnologias() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    // Percorre o vetor criando os elementos
    tecnologias.forEach((tecnologia, indice) => {

        lista.innerHTML += `
            <div class="item">
                <h3>${tecnologia.nome}</h3>
                <p>${tecnologia.descricao}</p>

                <button onclick="removerTecnologia(${indice})">
                    Remover
                </button>
            </div>
        `;
    });

    atualizarContador();
}

// Remove uma tecnologia pelo índice
function removerTecnologia(indice){

    tecnologias.splice(indice, 1);

    mostrarTecnologias();
}

// Atualiza o total de tecnologias
function atualizarContador(){

    document.getElementById("contador").innerText =
    `Total: ${tecnologias.length} tecnologias cadastradas`;
}

// Pesquisa tecnologias pelo nome
function filtrarTecnologias(){

    let texto =
    document.getElementById("pesquisa").value.toLowerCase();

    let itens = document.querySelectorAll(".item");

    itens.forEach(item => {

        let nome =
        item.querySelector("h3").textContent.toLowerCase();

        if(nome.includes(texto)){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}
