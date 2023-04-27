let botao = document.querySelector('#btn');
let login = document.querySelector('#login');

botao.addEventListener("click", function () {

   fetch('https://localhost:49709/log/02032023',)
      .then(function (body) {
         console.log(body)

         //function -> response == '200' -> index.html
      })

})