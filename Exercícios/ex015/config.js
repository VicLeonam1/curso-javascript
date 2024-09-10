let agora = new Date();
let ano = agora.getFullYear();

function verificar(){
    let anonasc = document.getElementById("anonasc").value
    let masc = document.getElementById('m')
    let fem = document.getElementById('f')
    let idade = ano - anonasc
    let info = document.getElementById('info')
    info.style.display = 'block'
    let imagem = document.getElementById('imagem')
    imagem.style.display = 'block'
    
    if(masc.checked && anonasc != "" ){
        if(idade < 13){
            info.innerHTML = `Você é uma criança do sexo <strong style="color: blue;"strong>masculino</strong> de ${idade} anos de idade`
            imagem.src = 'images/criança-homem.png'
        }else if(idade < 18){
            info.innerHTML = `Você é um adolescente do sexo <strong style="color: blue;">masculino</strong> de ${idade} anos de idade`
            imagem.src = 'images/adolescente-homem.png'
        }else if(idade < 50){
            info.innerHTML = `Você é um adulto do sexo <strong style="color: blue;">masculino</strong> de ${idade} anos de idade`

            imagem.src = 'images/adulto-homem.png'
        }else if(idade >= 50){
            info.innerHTML = `Você é um idoso do sexo <strong style="color: blue;">masculino</strong> de ${idade} anos de idade`
            imagem.src = 'images/idoso-homem.png'
        }
    }else if(fem.checked && anonasc != "" ){
        let imagem = document.getElementById('imagem')
        if(idade < 13){
            info.innerHTML = `Você é uma criança do sexo <strong style="color: #F00096;">feminino</strong> de ${idade} anos de idade`
            imagem.src = 'images/criança-mulher.png'
        }else if(idade < 18){
            info.innerHTML = `Você é um adolescente do sexo <strong style="color: #F00096;">feminino</strong> de ${idade} anos de idade`
            imagem.src = 'images/adolescente-mulher.png'
        }else if(idade < 50){
            info.innerHTML = `Você é um adulto do sexo <strong style="color: #F00096;">feminino</strong> de ${idade} anos de idade`
            imagem.src = 'images/adulto-mulher.png'
        }else if(idade >= 50){
            info.innerHTML = `Você é um idoso do sexo <strong style="color: #F00096;">feminino</strong> de ${idade} anos de idade`
            imagem.src = 'images/idoso-mulher.png'
        }
    }else if(masc.checked == false && anonasc === ""){
        document.getElementById('info').style.display = 'block'
        document.getElementById('info').innerHTML = `invalido`
    }
}
