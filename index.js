const ConfigExpress = require('./Config/ConfigExpress');
const conexao = require('./Database/ConexaoMySQL');
const tabelaCliente = require('./Infra/tableCliente');

conexao.connect(erro => {
    if (erro)
        console.log(erro);
    else {
        console.log("Conectado com sucesso!");

        tabelaCliente.init(conexao);

        const app = ConfigExpress();

        app.listen(3333, () => console.log("Servidor rodando na porta 3333"));

    }
});