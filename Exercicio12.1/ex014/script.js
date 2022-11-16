function carregar() {
    msg = window.document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
    min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if (hora >= 0 && hora < 12) {
        img.src ='manha.png'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}   