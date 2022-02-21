import { Person } from './person.model';

describe('Tests for Person', () => {
  let person: Person;

  beforeEach(() => {
    person = new Person('Nicolas', 'Molina', 38, 40, 1.65);
  });

  it('attrs', () => {
    expect(person.name).toEqual('Nicolas');
    expect(person.lastName).toEqual('Molina');
    expect(person.age).toEqual(38);
  });

  describe('tests for calcIMC', () => {
    it('should return a string: down', () => {
      // Arrange
      person.weight = 40;
      person.height = 1.65;
      // Act
      const rta = person.calcIMC();
      // Assert
      expect(rta).toEqual('down');
    });

    it('should return a string: normal', () => {
      // Arrange
      person.weight = 58;
      person.height = 1.65;
      // Act
      const rta = person.calcIMC();
      // Assert
      expect(rta).toEqual('normal');
    });

    it('should return a string: overweight', ()=>{
      person.weight = 80;
      person.height = 1.75;
      expect(person.calcIMC()).toEqual('overweight');
    });

    it('should return a string: overweight level 1', ()=>{
      person.weight = 75;
      person.height = 1.65;
      expect(person.calcIMC()).toEqual('overweight level 1');
    });

    it('should return a string: overweight level 2', ()=>{
      person.weight = 90;
      person.height = 1.65;
      expect(person.calcIMC()).toEqual('overweight level 2');
    });

    it('should return a string: overweight level 3', ()=>{
      person.weight = 120;
      person.height = 1.65;
      expect(person.calcIMC()).toEqual('overweight level 3');
    });

    it('should return a string: not found', ()=>{
      person.weight = -48;
      expect(person.calcIMC()).toEqual('not found');
      person.weight = -48;
      person.weight = -1.70;
      expect(person.calcIMC()).toEqual('not found');
    })
  });
});
