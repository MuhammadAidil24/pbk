export class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.info(`hello ${name}, apa kabar ${this.name}`);
  }
}
