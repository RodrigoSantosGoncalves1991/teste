import { editUsuario } from './http.js';

function getURL() {
  let query = decodeURI(location.search.slice(1));
  let partes = query.split('&');
  let data = {};
  partes.forEach(function (parte) {
    let chaveValor = parte.split('=');
    let chave = chaveValor[0];
    let valor = chaveValor[1];
    data[chave] = valor;
  });
  return data;
}

function formatarParaISO8601(data) {
  return data.split('/').reverse().join('-');
}

if (document.querySelector(".form")) {
  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let data_nascimento = document.getElementById('data_nascimento');
  IMask(
    data_nascimento, {
    mask: '00/00/0000'
  }
  );
  let cidade = document.getElementById('cidade');
  let emprego = document.getElementById('emprego');

  let urlData = getURL();
  nome.value = urlData.nome;
  email.value = urlData.email;
  data_nascimento.value = urlData.data_nascimento;
  cidade.value = urlData.cidade;
  emprego.value = urlData.emprego;

  document.getElementById('button').addEventListener('click', async (event) => {
    let dados = {
      id: urlData.id,
      nome: nome.value,
      email: email.value,
      data_nascimento: formatarParaISO8601(data_nascimento.value),
      cidade: cidade.value,
      emprego: emprego.value
    };
    if (dados.email == urlData.email) {
      delete dados.email;
    }
    let req = await editUsuario(dados);
    console.log(req);
  });
}

