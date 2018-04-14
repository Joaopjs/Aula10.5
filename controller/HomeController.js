var cliente = require('../models/Cliente');

module.exports = {

    index: function(req, res, next) {
        cliente.setNome('Joao');
        var eu = cliente.getNome();

        res.render('index', { title: eu });
    },

    users: function(req, res, next) {
        res.send('respond with a resource');
    },

    cadastro: function(req, res, next) {
        res.render('cadastro', { title: 'Cadastro' });
      }

}