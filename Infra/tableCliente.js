class tableCliente {
    init(conexao) {
        this.conexao = conexao;

        this.criaTabela();
    }

    criaTabela() {
        let sql = " CREATE TABLE IF NOT EXISTS Cliente(          " +
            " idCliente int primary key not null auto_increment, " +
            " nome varchar(255) not null,                        " +
            " cpf varchar(15) not null unique,                   " +
            " rg varchar(15) null,                               " +
            " email varchar(255) not null unique,                " +
            " telefone1 varchar(20) not null,                    " +
            " dataNasc date not null)                            ";

        this.conexao.query(sql, (erro) => {
            if (erro)
                console.log(erro);
            else
                console.log("Tabela Cliente criada com sucesso!");
        });
    }

}

module.exports = new tableCliente;