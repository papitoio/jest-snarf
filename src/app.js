const express = require('express');

const app = express()

app.get('/api/genero/:nome', (req, res) => {

    let nome = req.params.nome;

    if (nome=== 'Snarf')
        return res.status(404).send({message: 'Homem não encontrado', reason: 'Viado'});

    if (nome === 'Papini')
        return res.status(200).send({message: 'Homem encontrado com sucesso', reason: 'Homão da porra'});

    if (nome == 'Borel')
        return res.status(409).send({message: 'Não aceitamos homem com excesso de peso', reason: 'Gordo'});

});


module.exports = app
