function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebeh.jpg')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemh.jpg')
            } 
            else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'adultoh.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosoh.jpg')
            }
        }  
        else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebem.jpg')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            } 
            else if (idade <= 50) {
                //adulto
                img.setAttribute('src', 'adultom.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosom.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}