let agora = new Date()
let hora = agora.getHours()

if(hora <= 10){
    document.getElementById('hora').innerText = `Bom dia!, agora são ${hora} horas da manhã`
}else if(hora <= 18){
    document.getElementById('hora').innerText = `Boa tarde!, agora são ${hora} horas da tarde`
    document.body.style.background = 'peru'
    document.img.src = 'images/tarde.png'
}