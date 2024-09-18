let num = [2, 3, 4]

//Adiciona elementos

num[3] = 6
num.push(5)

//Deixa os elementos em ordem

num.sort()

//Estrutura de repetição para tirar os colchetes

for(pos = 0; pos < num.length; pos++){
    console.log(num[pos])
} 

for(let pos in num){
    console.log(num[pos])
}

//Buscar valores em um vetor

console.log(num.indexOf(5))

//caso o não tenha um valor selecionado ele mostra -1

console.log(num.indexOf(9))

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)