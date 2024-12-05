// ***** LESSON 76 CLASSES - INTRO *****

class Book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

// ***** LESSON 77 CLASSES - DEFAULT PROPERTY *****

class Book2 {
  title: string;
  author: string;
  checkedOut = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}
// ***** LESSON 78 CLASSES - READONLY MODIFIER *****

class Book3 {
  readonly title: string;
  author: string;
  checkedOut = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

// ***** LESSON 79 CLASSES - PUBLIC AND PRIVATE MODIFIERS *****

class Book4 {
  public readonly title: string;
  public author: string;
  private checkedOut = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }

  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

// ***** LESSON 80 CLASSES - CONSTRUCTOR SHORTCUT *****

class Book5 {
  private checkedOut = false;

  constructor(readonly title: string, readonly author: string) {}
}

const mistBorn = new Book("mistBorn", "blah blah");

// ***** LESSON 81 CLASSES - GETTERS AND SETTERS *****

class Book6 {
  private checkedOut = false;

  constructor(readonly title: string, readonly author: string) {}

  get info() {
    return `${this.title} ${this.author}`;
  }

  set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
}

const mistBorn6 = new Book6("mistBorn", "blah blah");

console.log(mistBorn6.info);
console.log(mistBorn6);
mistBorn6.checkOut = true;

console.log(mistBorn6);
// ***** LESSON 82 CLASSES - IMPLEMENT INTERFACE *****

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log("blah blah");
  }
}

const hipster = new Person("blah", 50);
