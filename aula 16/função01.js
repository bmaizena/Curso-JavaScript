function parimpar(n) {
    if (n%2 ==0) {
        return 'par'
    }
    else {
        return 'impar'
    }
}

n = 7
res = parimpar(n)
console.log(`O numero ${n} é ${res}`)
