function Enviar(){
        
let NomeDeUsuario = document.getElementById('nome').value
let EmailUsuario = document.getElementById('email').value
let duvidaUsuario = document.getElementById('duvida').value
let generoUsuario = document.querySelector("input[name='genero']:checked").value


alert("Seu nome é: " + NomeDeUsuario + '\n'
+ "seu email é: " + EmailUsuario + '\n'
 + "Sua senha registrada foi:  " + duvidaUsuario + '\n'
 + "Seu genero é " + generoUsuario )

}


    
