const request = require('supertest');

const app = require('../src/app')


describe('Quando é o Caio', () => {

    let response;

    beforeEach(async () => {
        response = await request(app)
            .get('/api/genero/Snarf')
            .expect(404);
    });

    test('Então vejo que o cara é viado mesmo', async () => {
        expect(response.body).toEqual({ message: 'Homem não encontrado', reason: 'Viado' })
    });
})

describe('Quando é o Papini', () => {

    let response;

    beforeEach(async () => {
        response = await request(app)
            .get('/api/genero/Papini')
            .expect(200);
    });

    test('Então vejo que o cara é homão da porra', async () => {
        expect(response.body).toEqual({ message: 'Homem encontrado com sucesso', reason: 'Homão da porra' })
    });
})

describe('Quando é o Borel', () => {

    let response;

    beforeEach(async () => {
        response = await request(app)
            .get('/api/genero/Borel')
            .expect(409);
    });

    test('Então vejo que gordos não são aceitos', async () => {
        expect(response.body).toEqual({ message: 'Não aceitamos homem com excesso de peso', reason: 'Gordo' })
    });
})




