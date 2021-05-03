const conexao = require('../Database/ConexaoMySQL');

class Cliente {

    inserirCliente(cliente, res) {
        let sql = "INSERT INTO Cliente SET ?";

        conexao.query(sql, cliente, (erro, resultado) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultado);
        });
    }

    selecionarClienteId(idCliente, res) {

    }

    selecionarClientes(res) {

    }

    editarCliente(idCliente, camposAlterados, res) {

    }

    excluirCliente(idCliente, res) {

    }
}

module.exports = new Cliente;