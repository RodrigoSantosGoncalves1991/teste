import { postAuth } from './http.js';

if (document.querySelector(".form")) {
  document.getElementById('button').addEventListener('click', async (event) => {
    let email = document.getElementById('login');
    let password = document.getElementById('password');

    let req = await postAuth(email.value, password.value);
    console.log('index');
    console.log(req);
    if (!!req.error === false) {
      window.location.href = 'http://127.0.0.1:8080/usuarios.html';
    }
  });
}