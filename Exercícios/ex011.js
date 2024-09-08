let idade = 2888


if(idade === 18){
    console.log(`Você é maior de idade pois ja tem ${idade} anos de idade`)
}else if(18 < idade && idade < 25){
    console.log(`Você tem entre 19 a 25 anos, você tem ${idade} anos de idade`)
}else if(idade >= 26){
    console.log(`Você tem mais de 25 anos de idade, você tem ${idade} anos de idade`)
}else if(idade < 18){
    console.log(`Você tem menos de 18 anos de idade, você tem ${idade} anos de idade`)
}