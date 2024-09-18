//escolher um numero de 1 a 100 - feito

//fazer este valor ser adicionado em um array - feito

//se o valor ja for encontrado dentro do array mostrar um alert falando que o valor ja existi - feito

//se o valor for maior que 100 não será colocado no array e mostrar um alert de valor invalido - feito

//se a caixa e a lista de valores tbm for vazia mostrar alert de preencher valores - feito

//caso tudo der certo:
/*
    -mostrar quantos numeros foram cadastrados - feito
    -mostrar o menor e o maior valor na lista(array) - feito
    -somar todos os valores e mostrar o resultados - feito
    -mostrar a media desses valores
*/

//se for adicionado mais um valor o resultado será oculto de novo para mostrar outro resultado com novos valores
let listnum = [];

function inserir() {
  let num = document.getElementById("num").value;
  let info = document.getElementsByClassName("info");
  for (let i = 0; i < info.length; i++) {
    info[i].style.display = "none";
  }

  if (num === "") {
    alert("Preencha os espaços vazios");
  } else if (num > 100) {
    alert("O numero não pode ser maior que 100");
  } else if (listnum.includes(Number(num))) {
    alert("O valor ja existe na lista, adicione outro valor");
  } else {
    num = Number(num);
    listnum.push(num);
    let acum = "";
    for (pos in listnum) {
      acum += `<option>O valor ${listnum[pos]} foi adicionado</option>`;
    }

    document.getElementById("numlist").innerHTML = acum;
  }
}

function verificar() {
  if (listnum.length === 0) {
    alert("A lista está vazia, adicione 1 ou mais valores na lista");
  } else {
    let info = document.getElementsByClassName("info");
    let min = Math.min(...listnum);
    let max = Math.max(...listnum);
    for (let i = 0; i < info.length; i++) {
      info[i].style.display = "block";
    }

    function soma(listnum) {
      return listnum.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
      }, 0);
    }

    let media = soma(listnum) / listnum.length;

    document.getElementById(
      "info0"
    ).innerHTML = `A lista possuí ${listnum.length} valores`;
    document.getElementById(
      "info1"
    ).innerHTML = `A soma de todos os valores  é igual a ${soma(listnum)}`;
    document.getElementById(
      "info2"
    ).innerHTML = `O menor valor desta lista é ${min} e o maior valor é ${max}`;
    document.getElementById(
      "info3"
    ).innerHTML = `A média desses valores é ${media}`;
  }
}
