let agora = new Date()
let hora = agora.getHours()
let imagem = document.getElementById('imagem')

if(hora > 18){
    document.getElementById('hora').innerText = `Boa tarde!, agora são ${hora} horas da tarde`
    document.body.style.background = '#000896' 
    imagem.src = 'images/noite.png'
}else if(hora > 10){
    document.getElementById('hora').innerText = `Boa tarde!, agora são ${hora} horas da tarde`
    document.body.style.background = 'peru' 
    imagem.src = 'images/tarde.png'
}else if(hora > 0){
    document.getElementById('hora').innerText = `Bom dia!, agora são ${hora} horas da manhã`
}