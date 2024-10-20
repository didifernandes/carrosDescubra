function mostrarCarros(event) {
    event.preventDefault();  // Isso evita que a página seja recarregada

    // Obtendo os valores dos campos
    let cartao = document.getElementById('cartao').value;
    let validade = document.getElementById('validade').value;
    let codigo = document.getElementById('codigo').value;

    // Verificando se os campos estão preenchidos (só por segurança)
    if (cartao && validade && codigo) {
        // Dados de carros para exibir
        let carros = [
            { nome: 'Você é o Relâmpago McQueen', imagem: 'img/mcQueen.jpeg' },
            { nome: 'Você é o Mate', imagem: 'img/mate.jpeg' },
            { nome: 'Você é o Doc Hudson', imagem: 'img/doc_hudson.jpeg' },
            { nome: 'Você é a Sally', imagem: 'img/sally.jpeg' },
            { nome: 'Você é o Guido', imagem: 'img/guido.jpeg' },
            { nome: 'Você é o Chick Hicks', imagem: 'img/chick_hicks.jpeg' }
        ];

        // Escolher um carro aleatoriamente
        let carroEscolhido = carros[Math.floor(Math.random() * carros.length)];

        // Criando novos elementos para o resultado
        let divResultado = document.createElement('div');
        divResultado.classList.add('resultado');

        let nomeCarro = document.createElement('h2');
        nomeCarro.textContent = carroEscolhido.nome;

        let imagemCarro = document.createElement('img');
        imagemCarro.src = carroEscolhido.imagem;
        imagemCarro.alt = carroEscolhido.nome;

        // Adicionando os elementos à nova div
        divResultado.appendChild(nomeCarro);
        divResultado.appendChild(imagemCarro);

        // Adicionando o resultado à div de resultados
        document.getElementById('resultados').appendChild(divResultado);
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}
