function gerartabu(){
    let tabu =  document.getElementById('tabu')
    tabu.innerHTML = ''
    let num = document.getElementById('num').value
    document.getElementById('tabu').style.display = 'block'
    let acum = 0
    num = Number(num)
    for(c = 1; c <= 10; c++){
        let result = num * c
        tabu.innerHTML += `<option> ${c} x ${num} = ${result} </option>`
    }
}