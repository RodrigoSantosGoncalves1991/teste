import { postUser } from './http.js';

if (document.querySelector(".form")) {
  document.getElementById('button').addEventListener('click', async (event) => {
    let email = document.getElementById('login');
    let password = document.getElementById('password');
    let password_confirm = document.getElementById('password_confirm');

    let req = await postUser(email.value, password.value, password_confirm.value);

    if (!!req.error === false) {
      window.location.href = 'http://127.0.0.1:8080/index.html';
    }
  });
}

