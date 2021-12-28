import mocha from 'mocha';
const { describe, it } = mocha;
import chai from 'chai';
const { expect } = chai;
import Person from '../src/person.js';

const mockedPersonObj = {
  from: '2020-01-01',
  to: '2020-02-01',
  vehicles: ['Bike', 'Carro'],
  kmTraveled: '20000',
  id: '1',
};

describe('Person', () => {
  it('should return a person instance from a string', () => {
    const person = Person.generateInstanceFromString(
      '1 Bike,Carro 20000 2020-01-01 2020-02-01'
    );

    const expected = mockedPersonObj;

    expect(person).to.be.deep.equal(expected);
  });
  it('shoud format values', () => {
    const person = new Person(mockedPersonObj);

    const result = person.formatted('pt-BR');
    const expected = {
      id: 1,
      from: '01 de janeiro de 2020',
      kmTraveled: '20.000 km',
      to: '01 de fevereiro de 2020',
      vehicles: 'Bike e Carro',
    };

    expect(result).to.be.deep.equal(expected);
  });
});
