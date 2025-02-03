let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById('amigo');
  let nomeAmigo = inputAmigo.value;

  if (!nomeAmigo) {
    alert("Por favor, insira um nome.");
  }
  amigos.push(nomeAmigo);
  atualizarListaAmigos();

  inputAmigo.value = '';
}

function atualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');

  lista.innerHTML = '';

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  })
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia.');
    return;
  }
  let indice = Math.floor(Math.random() * amigos.length);
  let nomeSorteado = amigos[indice];
  document.getElementById('resultado').innerHTML = 'Seu amigo secreto é: ' + nomeSorteado;
}
