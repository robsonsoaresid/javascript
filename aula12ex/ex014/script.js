function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas Bom dia!`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        //msg.innerHTML = `Agora são ${hora} horas Bom dia!`
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#c09e82'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        msg.innerHTML = `Agora são ${hora} horas Boa tarde!`
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#808b23'
    } else {
        //Boa noite!
        msg.innerHTML = `Agora são ${hora} horas Boa noite!`
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#6d4567'
    }
}