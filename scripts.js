function mostrarCarros(event) {
    event.preventDefault();  

    
    let cartao = document.getElementById('cartao').value;
    let validade = document.getElementById('validade').value;
    let codigo = document.getElementById('codigo').value;

    
    if (cartao && validade && codigo) {
      
        let carros = [
            { nome: 'Você é o Relâmpago McQueen', imagem: 'img/mcQueen.jpeg' },
            { nome: 'Você é o Mate', imagem: 'img/mate.jpeg' },
            { nome: 'Você é o Doc Hudson', imagem: 'img/doc_hudson.jpeg' },
            { nome: 'Você é a Sally', imagem: 'img/sally.jpeg' },
            { nome: 'Você é o Guido', imagem: 'img/guido.jpeg' },
            { nome: 'Você é o Chick Hicks', imagem: 'img/chick_hicks.jpeg' }
        ];

       
        let carroEscolhido = carros[Math.floor(Math.random() * carros.length)];

       
        let divResultado = document.createElement('div');
        divResultado.classList.add('resultado');

        let nomeCarro = document.createElement('h2');
        nomeCarro.textContent = carroEscolhido.nome;

        let imagemCarro = document.createElement('img');
        imagemCarro.src = carroEscolhido.imagem;
        imagemCarro.alt = carroEscolhido.nome;

     
        divResultado.appendChild(nomeCarro);
        divResultado.appendChild(imagemCarro);

     
        document.getElementById('resultados').appendChild(divResultado);
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}
