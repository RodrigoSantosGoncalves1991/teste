import { addUsuario } from './http.js';

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

  document.getElementById('button').addEventListener('click', async (event) => {
    let dados = {
      nome: nome.value,
      email: email.value,
      data_nascimento: formatarParaISO8601(data_nascimento.value),
      cidade: cidade.value,
      emprego: emprego.value
    };
    let req = await addUsuario(dados);
    console.log(req);
    location.reload();
  });
}