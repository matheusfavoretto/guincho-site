
let brinquedo=""
let preco=0

function selecionar(nome,valor){
brinquedo=nome
preco=valor
document.getElementById("brinquedo").innerText="Brinquedo escolhido: "+nome+" - R$"+valor
}

function enviar(){
let retirada=document.getElementById("retirada").value
let devolucao=document.getElementById("devolucao").value

let sinal=preco*0.5
let restante=preco*0.5

let mensagem=
"Olá gostaria de alugar um brinquedo 🎉%0A"+
"Brinquedo: "+brinquedo+"%0A"+
"Valor: R$"+preco+"%0A"+
"Reserva (50%): R$"+sinal+"%0A"+
"Restante (50%): R$"+restante+"%0A"+
"Retirada: "+retirada+"%0A"+
"Devolução: "+devolucao

window.open("https://wa.me/5519988604840?text="+mensagem)
}
