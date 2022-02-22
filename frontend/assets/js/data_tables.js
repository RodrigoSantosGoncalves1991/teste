import {getUsuarios} from './http.js';


let result = await getUsuarios();

let data = result.list.
        map(element => 
            {return {
                    id: element.id, 
                    nome: element.nome, 
                    email: element.email, 
                    data_nascimento: element.data_nascimento, 
                    cidade: element.cidade, 
                    emprego: element.emprego
                };
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
                { "data": "emprego" }
            ]
        }
    );
});

