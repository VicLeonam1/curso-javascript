function contar() {
    let ini = document.getElementById("ini").value
    let fim = document.getElementById("fim").value
    let pass = Number(document.getElementById("pass").value)
  if (ini == '' || fim == '') {
    alert("preencha os espaços vazios");
}
else {
    ini = Number(ini)
    fim = Number(fim)
    let result = "";
    if(pass <= 0){
        alert('Passo invalído, passo precisar ser igual ou maior que 1 (passo == 1)')
        pass = 1}
        
        while (ini <= fim) {
            result += `${ini} \u{1F449}`;
            ini += pass;
        }
        
        result += "FIM";
    document.getElementById("info").innerHTML = result;
  }
}
