const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);  //arrange

describe('codebreaker', () => {
    test('test 8888 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=8888'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('');
        done();
    });

    test('test 2169 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=2169'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('xxxx');
        done();
      });

      //posibles casos de 1 x
    test('test 2075 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=2075'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('x');
        done();   
    });

    test('test 0175 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=0175'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('x');
        done();   
    });
    test('test 7065 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=7065'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('x');
        done();   
    });
    test('test 5079 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=5079'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('x');
        done();   
    });

    test('test 8165 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=8165'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('xx');
        done();   
    });

    test('test 2869 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=2869'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('xxx');
        done();   
    });

    test('test 9612 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=9612'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('----');
        done();  
    });

    test('test 2196 to equal 2169', async done  => {
        const response = await request.get('/codebreaker?value=2196'); //act
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body.result).toBe('xx--');
        done();  
    });

})
