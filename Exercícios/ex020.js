function parimpa(n){
    if (n%2 == 0){
        return 'par'
    } else{
        return 'impar'
    }
}

console.log(parimpa(4))

// dois parametos

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(5, 7))

// function dentro de variavel

let v = function(x){
    return x*2
}

 console.log(v(4))