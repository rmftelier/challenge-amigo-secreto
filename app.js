//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; //variável para armazenas os nomes dos amigos que forem sendo adicionados através do input

//Tarefa 1 
//Implementar uma função para adicionar amigos
function adicionarAmigo() {
  //capturo o elemento Dom 
  let inputAmigo = document.getElementById('amigo');
  //capturo agora o valor do campo
  let nomeAmigo = inputAmigo.value;
  console.log(nomeAmigo);

  //validar a entrada para garantir que o campo não esteja vazio 
  if (!nomeAmigo) {
    alert("Por favor, insira um nome.");
  }
  //adiciono o nome do amigo ao array
  amigos.push(nomeAmigo);

  //limpo o campo de input
  inputAmigo.value = '';
  console.log(amigos);
}

