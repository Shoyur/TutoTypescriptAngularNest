function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]




// Ici, value pourrait être n'importe quel type
// un peu comme un array, qui est une classe, peut être n'importe quel type
class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value1 = new NamedValue<number>('myNumber');
  value1.setValue(10);
  console.log(value1.toString()); // myNumber: 10

// On peut mettre un type par défaut si aucun n'est fourni :
// class NamedValue<T = string> { ...

