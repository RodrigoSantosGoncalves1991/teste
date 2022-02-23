import { postAuth } from './http.js';

if (sessionStorage.getItem('token') != null) {
  window.location.href = 'http://127.0.0.1:8080/usuarios.html';
}

if (document.querySelector(".form")) {
  document.getElementById('button').addEventListener('click', async (event) => {
    let email = document.getElementById('login');
    let password = document.getElementById('password');

    let req = await postAuth(email.value, password.value);
    if (!!req.error === false) {
      sessionStorage.setItem('token', req.token);
      window.location.href = 'http://127.0.0.1:8080/usuarios.html';
    }
  });
}