const url = 'https://localhost:7132/api/Log?data_criacao=2023-03-19%2015%3A52%3A17.0900000'

let botao = document.querySelector('#btn');
let login = document.querySelector('#login');


//apenas teste igual da fake  api
//função para pegar tudo que a api etsa exibindo

async function getAllPosts() {

    const resposta = await fetch(url);

    //estraindo o dado 
    const data = await resposta.json()
    console.log(data)




}

getAllPosts();