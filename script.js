// Реализуйте класс Person и создайте наследование от него,
// реализуйте наследуемые сущьности, такие как Programmer,
// Designer и Manager. Пускай каждый из классов делает что-то свое,
// программист кодит, дизайнер рисует (отправит текст что нарисовал что-то)
// и менеджер указывает задачу. В данном домашнем задании полная свобода,
// попробуйте свои силы и знания при работе с get и set
// и создайте уникальные сущности на основе шаблона person
// которые могли бы работать совместно со своей базой.

class Person {
  name;
  age;
  print() {
    console.log(`${this.name}. Возраст: ${this.age}`);
  }
}

class Progpammer extends Person {
  whatDoes = "кодит";
  work() {
    console.log(`${this.name} ${this.whatDoes}`);
  }
}

class Designer extends Person {
  whatDoes = "рисует";
  work() {
    console.log(`${this.name} ${this.whatDoes}`);
  }
}

class Manager extends Person {
  whatDoes = "продает";
  work() {
    console.log(`${this.name} ${this.whatDoes}`);
  }
}

const emp1 = new Progpammer();
const emp2 = new Designer();
const emp3 = new Manager();

emp1.name = "Марат";
emp1.age = 25;

emp2.name = "Екатерина";
emp2.age = 21;

emp3.name = "Вадим";
emp3.age = 27;

emp1.print();
emp1.work();

emp2.print();
emp2.work();

emp3.print();
emp3.work();
