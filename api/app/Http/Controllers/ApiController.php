<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Usuarios;

class ApiController extends Controller
{
    public function createUsuario(Request $request) {
        $array = ['error' => ''];

        $rules = [
            'nome' => 'required|max:50',
            'email' => 'required|unique:usuarios|email|max:50',
            'data_nascimento' => 'required|date|min:10',
            'cidade' => 'required|max:50',
            'emprego' => 'required|max:50',
        ];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()) {
            $array['error'] = $validator->messages();
            return $array;
        }

        $nome = $request->input('nome');
        $email = $request->input('email');
        $data_nascimento = $request->input('data_nascimento');
        $cidade = $request->input('cidade');
        $emprego = $request->input('emprego');

        $usuarios = new Usuarios();
        $usuarios->nome = $nome;
        $usuarios->email = $email;
        $usuarios->data_nascimento = $data_nascimento;
        $usuarios->cidade = $cidade;
        $usuarios->emprego = $emprego;
        $usuarios->save();

        return $array;
    }

    public function readAllUsuarios() {
        $array = ['error' => ''];

        $usuarios = Usuarios::all();
        $array['list'] = $usuarios;
        //$array['current_page'] = $usuarios->currentPage();

        return $array;
    }

    public function readUsuario($id) {
        $array = ['error' => ''];

        $usuario = Usuarios::find($id);

        if($usuario) {
            $array['usuario'] = $usuario;
        } else {
            $array['error'] = 'O usuário '.$id.' não existe';
        }

        return $array;
    }

    public function updateUsuario($id, Request $request) {
        $array = ['error' => ''];

        $rules = [
            'nome' => 'max:50',
            'email' => 'unique:usuarios|email|max:50',
            'data_nascimento' => 'date|min:10',
            'cidade' => 'max:50',
            'emprego' => 'max:50',
        ];

        $validator = Validator::make($request->all(), $rules);

        if($validator->fails()) {
            $array['error'] = $validator->messages();
            return $array;
        }

        $nome = $request->input('nome');
        $email = $request->input('email');
        $data_nascimento = $request->input('data_nascimento');
        $cidade = $request->input('cidade');
        $emprego = $request->input('emprego');

        $usuario = Usuarios::find($id);

        if($usuario) {

            if($nome) {
                $usuario->nome = $nome;
            }

            if($email) {
                $usuario->email = $email;
            }

            if($data_nascimento) {
                $usuario->data_nascimento = $data_nascimento;
            }

            if($cidade) {
                $usuario->cidade = $cidade;
            }

            if($emprego) {
                $usuario->emprego = $emprego;
            }

            $usuario->save();

        } else {
            $array['error'] = 'Usuário '.$id.' não existe, logo, não pode ser atualizado.';
        }

        return $array;
    }

    public function deleteUsuario($id) {
        $array = ['error' => ''];

        $usuario = Usuarios::find($id);
        if($usuario) {
            $usuario->delete();
        } else {
            $array['error'] = 'Usuário '.$id.' não existe, logo, não pode ser deletado.';
        }

        return $array;
    }
}
