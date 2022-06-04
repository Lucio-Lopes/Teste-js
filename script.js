function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date() 
    var min = data.getMinutes()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if(hora >=0 && hora < 12){
        //bom dia
        img.src='fotomanha.png'
        document.body.style.background = '#fef8d4'
    }
    else if(hora >=12 && hora < 18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#fe7901'
    }
    else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#052c5a'

    }
}

