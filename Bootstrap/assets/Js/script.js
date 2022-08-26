/*Case Sensitive

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classes: getElementByClassName()
por Seletor: querySelector
*/
var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var nomeOK = false
var emailOK = false
var assuntoOK = false
var mapa = querySelector('#mapa')

function validarNome (){
    let txNome = document.getElementById('txtNome')
    if(nome.value.length < 2){
        /*alert('Nome invalido!')*/
        txtNome.innerHTML ='Nome invalido!'
        txtNome.style.color="red "
    }
    else{
        txtNome.innerHTML= 'Nome valido!'
        txtNome.style.color = 'green'
        nomeOK = true
    }
   }
    function validarEmail(){
        let txtEmail=document.querySelector('#txtEmail')

        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'E-mail Invalido!'
            txtEmail.style.color = 'red'
        }
        else{
            txtEmail.innerHTML= 'E-mail Valido!'
            txtEmail.style.color= 'green'
            emailOK = true
        }
    }

    function validarAssunto (){
        let txtAssunto = document.querySelector('#txtAssunto')

        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Texto é muito grande, digite no maximo 100 caracteres!'
            txtAssunto.style.color='red'
            txtAssunto.style.display = 'block'
        }
        else{
            txtAssunto.style.display = 'none'
            assuntoOK = true
        }
    }
        function enviar(){
            if(nomeOK == true && emailOK == true && assuntoOK == true){
            alert ('Formulario enviado corretamente!')
        }
        else{
            alert ('Prencha o formulario antes de enviar!')
        }

    }
    function mapaZoom(){
     mapa.style.width ='800px'
     mapa.style.height = '600px'

    }
    function mapaNormal(){
    mapa.style.width ='400px'
    mapa.style.height = '200px'

    }
