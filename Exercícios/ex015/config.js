let agora = new Date();
let ano = agora.getFullYear();

function verificar(){
    let anonasc = document.getElementById("anonasc").value
    let masc = document.getElementById('m')
    let fem = document.getElementById('f')
    let idade = ano - anonasc
    let info = document.getElementById('info')
    
    if(masc.checked && anonasc != "" ){
        info.style.display = 'block'
        info.strong.style.color = 'blue'
        let imagem = document.getElementById('imagem')
        if(idade < 13){
            info.innerHTML = `Você é uma criança do sexo <strong>masculino</strong> de ${idade} anos de idade`
            imagem.src = 'images/criança-homem.png'
            imagem.style.display = 'block'
        }else if(idade < 18){
            info.innerHTML = `Você é um adolescente do sexo <strong>masculino</strong> de ${idade} anos de idade`
            imagem.style.display = 'block'
            imagem.src = 'images/adolescente-homem.png'
        }else if(idade < 50){
            info.innerHTML = `Você é um adulto do sexo <strong>masculino</strong> de ${idade} anos de idade`
             imagem.style.display = 'block'
            imagem.src = 'images/adulto-homem.png'
        }else if(idade >= 50){
            info.innerHTML = `Você é um idoso do sexo <strong>masculino</strong> de ${idade} anos de idade`
            imagem.style.display = 'block'
            imagem.src = 'images/idoso-homem.png'
        }
    }else if(fem.checked && anonasc != "" ){
        info.style.display = 'block'
        info.style.color =  'pink'
        let imagem = document.getElementById('imagem')
        if(idade < 13){
            info.innerHTML = `Você é uma criança do sexo <strong>feminino</strong> de ${idade} anos de idade`
            imagem.src = 'images/criança-homem.png'
            imagem.style.display = 'block'
        }else if(idade < 18){
            info.innerHTML = `Você é um adolescente do sexo <strong>feminino</strong> de ${idade} anos de idade`
            imagem.style.display = 'block'
            imagem.src = 'images/adolescente-homem.png'
        }else if(idade < 50){
            info.innerHTML = `Você é um adulto do sexo <strong>feminino</strong> de ${idade} anos de idade`
             imagem.style.display = 'block'
            imagem.src = 'images/adulto-homem.png'
        }else if(idade >= 50){
            info.innerHTML = `Você é um idoso do sexo <strong>feminino</strong> de ${idade} anos de idade`
            imagem.style.display = 'block'
            imagem.src = 'images/idoso-homem.png'
        }
    }else if(masc.checked == false && anonasc === ""){
        document.getElementById('info').style.display = 'block'
        document.getElementById('info').innerHTML = `invalido`
    }
}
