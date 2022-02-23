const apiTeste = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});


async function getUsuarios() {
  try {
    let token = sessionStorage.getItem('token');
    let response = await apiTeste.get('usuarios', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
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

async function editUsuario(dados) {
  try {
    let token = sessionStorage.getItem('token');
    let id = dados.id;
    delete dados.id;
    let response = await apiTeste.put(`usuario/${id}`, dados, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function addUsuario(dados) {
  try {
    let token = sessionStorage.getItem('token');
    let response = await apiTeste.post('usuario', dados, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteUsuario(id) {
  try {
    let token = sessionStorage.getItem('token');
    let response = await apiTeste.delete(`usuario/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}



async function getLogout() {
  try {
    let token = sessionStorage.getItem('token');
    let response = await apiTeste.get('auth/logout', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getUsuarios, postUser, postAuth, getLogout, editUsuario, addUsuario, deleteUsuario };
