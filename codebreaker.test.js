const cb = require('./codebreaker'); // Arrange

describe('codebreaker', () => {
    test('test 8888 to equal 2169', () => {
      var value = cb.codebreaker('8888'); //Act
      expect(value).toBe(''); //Assert
    });
    test('test 2169 to equal 2169', () => {
        var value = cb.codebreaker('2169'); //Act
        expect(value).toBe('xxxx'); //Assert
      });
      //posibles casos de 1 x
    test('test 2075 to equal 2169', () => {
        var value = cb.codebreaker('2075'); //Act
        expect(value).toBe('x'); //Assert
    });

    test('test 0175 to equal 2169', () => {
        var value = cb.codebreaker('0175'); //Act
        expect(value).toBe('x'); //Assert
    });
    test('test 7065 to equal 2169', () => {
        var value = cb.codebreaker('7065'); //Act
        expect(value).toBe('x'); //Assert
    });
    test('test 5079 to equal 2169', () => {
        var value = cb.codebreaker('5079'); //Act
        expect(value).toBe('x'); //Assert
    });

    test('test 8165 to equal 2169', () => {
        var value = cb.codebreaker('8165'); //Act
        expect(value).toBe('xx'); //Assert
    });

    test('test 2869 to equal 2169', () => {
        var value = cb.codebreaker('2869'); //Act
        expect(value).toBe('xxx'); //Assert
    });

    test('test 9612 to equal 2169', () => {
        var value = cb.codebreaker('9612'); //Act
        expect(value).toBe('----'); //Assert
    });

    test('test 2196 to equal 2169', () => {
        var value = cb.codebreaker('2196'); //Act
        expect(value).toBe('xx--'); //Assert
    });



})

describe('codebreaker2', () => {
    
    test('Longitud', () => {
        var value = cb.generateRandom(); //Act
        expect(value.length).toBe(4); //Assert
    });




})