let num = [5,8,4]

num[3] = 6 //pra adicionar um número num determinado índice

num.push() //pra adicionar um numero do vetor sem se preocupar com o índice

num.length //pra ver quantos elementos tem no vetor

num.sorte // coloca o vetor em ordem crescente

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) //busca um valor dentro do vetor
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log('O valor está na posição '+pos)
}