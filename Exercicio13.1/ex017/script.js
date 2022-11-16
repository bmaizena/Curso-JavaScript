function gerar() {
    num = document.getElementById('txtnum')
    res = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por Favor Digite um numero')
    }
    else {
        n= Number (num.value)
        res.innerHTML = ''
        for (c =1; c <=10; c++) {
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)
        }
    }
}