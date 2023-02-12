
// "banco de dados"
var user = "usuario@teste.com"
var password = "123456"


function check_login(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    var answer = document.getElementById("resposta").innerHTML;

    if (user == email && password == senha){
        document.location.href = "login.html";
    }
    else {

        answer.innerHTML = "Acesso negado!"
    }
}