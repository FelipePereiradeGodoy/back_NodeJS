import ConfigExpress from './Config/ConfigExpress';
import conexao from './Database/ConexaoMySQL';
import tabelaCliente from './Infra/tableCliente';

conexao.connect(erro => {
    if (erro)
        console.log(erro);
    else {
        console.log("Conectado com sucesso!");

        tabelaCliente();

        const app = ConfigExpress();

        app.listen(3333, () => console.log("Servidor rodando na porta 3333"));

    }
});