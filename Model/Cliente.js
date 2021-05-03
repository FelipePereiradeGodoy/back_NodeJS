const conexao = require('../Database/ConexaoMySQL');

class Cliente {

    inserirCliente(cliente, res) {
        let sql = "INSERT INTO Cliente SET ?";

        conexao.query(sql, cliente, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        });
    }

    selecionarClienteId(idCliente, res) {
        const sql = `SELECT * FROM Cliente WHERE idCliente = ${idCliente}`;

        conexao.query(sql, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        });
    }

    selecionarClientes(res) {
        const sql = 'SELECT * FROM Cliente';

        conexao.query(sql, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        });
    }

    editarCliente(idCliente, camposAlterados, res) {
        const sql = 'UPDATE Cliente SET ? WHERE IdCliente ?';

        conexao.query(sql, [camposAlterados, idCliente], (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        });
    }

    excluirCliente(idCliente, res) {
        const sql = `DELETE FROM Cliente WHERE idCliente = ${idCliente}`;

        conexao.query(sql, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        })
    }
}

module.exports = new Cliente;