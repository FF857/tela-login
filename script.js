
// "banco de dados"
var user_bd = "usuario@teste.com"
var password_bd = "12345"
//

function check_login(){

    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    var answer = document.getElementById("resposta");

    if (user_bd == email && password_bd == senha){
        document.location.href = "login.html";
    }
    else {

        answer.innerHTML = "Usuário ou senha incorretos!"
        //alert("Usuário ou senha incorretos")
    }
}

