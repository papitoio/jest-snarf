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