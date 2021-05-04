const Cliente = require('../Model/Cliente');

module.exports = app => {
    app.get('/clientes', (req, res) => {
        Cliente.selecionarClientes(res);
    });

    app.get('/clientes/:id', (req, res) => {
        const idCliente = parseInt(req.params.id);

        Cliente.selecionarClienteId(idCliente, res);
    });

    app.post('/clientes', (req, res) => {
        const cliente = req.body;

        Cliente.inserirCliente(cliente, res);
    });

    app.patch('/clientes/:id', (req, res) => {
        const idCliente = parseInt(req.params.id);
        const valoresAlterados = req.body;

        Cliente.editarCliente(idCliente, valoresAlterados, res);
    });

    app.delete('/clientes/:id', (req, res) => {
        const idCliente = req.params.id;

        Cliente.excluirCliente(idCliente, res);
    });
}
