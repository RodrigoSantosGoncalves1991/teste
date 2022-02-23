import { getUsuarios, getLogout, deleteUsuario } from './http.js';

function formatarParaDataBrasileira(data) {
    return data.split('-').reverse().join('/');
}

function deletaUsuario(id) {
    console.log(id);
}

let result = await getUsuarios();

if (!!result == false) {
    window.location.href = 'http://127.0.0.1:8080/index.html';
}

let data = result.list.
    map(({ id, nome, email, data_nascimento, cidade, emprego }) => {
        let _data_nascimento = formatarParaDataBrasileira(data_nascimento);
        let acoes = `<a href="http://127.0.0.1:8080/formulario.html?id=${id}&nome=${nome}&email=${email}&data_nascimento=${_data_nascimento}&cidade=${cidade}&emprego=${emprego}" style="text-decoration:none">
                        <img width="20" src="./assets/img/document.png" />
                      </a>
                      <a class="delete-item" data-id="${id}" style="text-decoration:none;cursor: pointer;">
                        <img width="20" src="./assets/img/trash.png" />
                      </a>`;
        return {
            id: id,
            nome: nome,
            email: email,
            data_nascimento: _data_nascimento,
            cidade: cidade,
            emprego: emprego,
            acoes: acoes
        };
    });

document.getElementById('button').addEventListener('click', async (event) => {
    await getLogout();
    sessionStorage.removeItem('token');
    window.location.href = 'http://127.0.0.1:8080/index.html';
});


$(document).ready(function () {
    $("#data-tables").DataTable(
        {
            "data": data,
            "columns": [
                { "data": "id" },
                { "data": "nome" },
                { "data": "email" },
                { "data": "data_nascimento" },
                { "data": "cidade" },
                { "data": "emprego" },
                { "data": "acoes" }
            ]
        }
    );

    document.querySelectorAll('.delete-item').forEach((item) => {
        console.log(item.getAttribute('data-id'));
        item.addEventListener('click', async (event) => {
            console.log(item.getAttribute('data-id'));
            let id = item.getAttribute('data-id');
            let resp = await deleteUsuario(id);
            location.reload();
        })
    });


});



