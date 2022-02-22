const apiTeste = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});


async function getUsuarios() {
  try {
    let response = await apiTeste.get('usuarios');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function postUser(input_email, input_password, input_password_confirm) {
  try {
    let response = await apiTeste.post('user', {
      email: input_email,
      password: input_password,
      password_confirm: input_password_confirm
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function postAuth(input_email, input_password) {
  try {
    let response = await apiTeste.post('auth', {
      email: input_email,
      password: input_password
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getUsuarios, postUser, postAuth };
