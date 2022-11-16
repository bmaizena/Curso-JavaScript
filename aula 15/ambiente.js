num = [5, 4, 3, 9]

num.sort()
console.log(`nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)

console.log(`O terceiro valor do vetor é ${num[2]}`)
/*
for (pos=0; pos < num.length; pos++) {
    console.log(`Na posição ${pos+1} está o numero ${num[pos]}`)
}
*/

for (pos in num) {
    
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
    
}
 pos = num.indexOf(5)
 
 if (pos == -1) {
    console.log('o valor nao foi encontrado')
 }
 else {
    console.log(`o valor está na posição ${pos}`)
 }
