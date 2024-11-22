let name: string = 'john';
name = 'chloe';
name = name.toUpperCase();
console.log(name);

let amount: number = 20;
amount = 12 - 1;
// amount = 'hello'; not number error

let bool: boolean = true;
bool = false;
// bool = 'hello'; not bool error

let test = 'test';
// test = 2; inference not string error

// ***** LESSON 12 UNION TYPE *****

let tax: number | string = 10;
tax = '9';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';

// ***** LESSON 13 ANY TYPE *****

let notSure: any = 4;
notSure = '4';
notSure = true;

let anyValue; // infers any type
anyValue = 10;
anyValue = '10';

// ***** LESSON 14 *****

const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
  }
  break;
}

console.log(foundBook?.length);

// ***** LESSON 16 ARRAYS *****

let prices: number[] = [100, 2, 4];

prices.push(9);

let fruit: string[] = ['apple', 'orange'];

// let randomValues: [] = [0, 9]; error expects empty array

let names = ['peter', 'susan', 1];

names.push(9);
let array: (string | boolean)[] = ['apple', true];

// ***** LESSON 18 OBJECT FUNDAMENTALS *****

let car: { brand: string; year: number } = {
  brand: 'ford',
  year: 2020,
};

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 20 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = 'book2' readonly error
book.title = 'book2'; // can still change original object

// ***** LESSON 20 FUNCTIONS *****

const sayHi = (name: string) => {
  return `hi ${name}`;
};

const useSayHi = sayHi('paul');
useSayHi.toLocaleUpperCase();

console.log(sayHi('john'));

// ***** LESSON 21 FUNCTIONS - RETURNS *****

const calculateDiscount = (price: number): number => {
  const hasDiscount = true;

  if (hasDiscount) {
    return price;
    // return 'disocunt applied';
  }

  return price * 0.9;
};

const finalPrice = calculateDiscount(200);

const namesArray: string[] = ['john', 'paul'];

const checkName = (name: string, namesArray: string[]): boolean => {
  let nameFound = false;
  for (let nameA of namesArray) {
    if (nameA === name) {
      nameFound = true;
    } else {
      nameFound = false;
    }
  }
  return nameFound;
};

console.log(checkName('john', namesArray));

// ***** LESSON 24 OPTIONAL PARAMETERS *****

const calcPrice = (price: number, discount?: number) => {
  return price - (discount || 0);
};

let priceAfterDiscount = calcPrice(100, 20);

// ***** LESSON 25 DEFAULT PARAMETER *****

let calcScore = (initialScore: number, penaltyPoints: number = 0) => {
  return initialScore - penaltyPoints;
};

let scoreAfterPenalty = calcScore(100, 20);
let scoreWithoutPenalty = calcScore(100);

// ***** LESSON 26 FUNCTIONS - REST PARAMETER *****

const sum = (message: string, ...numbers: number[]) => {
  const doubled = numbers.map((num) => num * 2);

  let total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return `${message} ${total}`;
};

let sumResult = sum('the total is', 1, 2, 3, 4, 4, 5, 6, 7);

// ***** LESSON 27 FUNCTIONS - VOID KEYWORD *****

const log = (message: string) => {
  console.log(message);
};

log('hllo');

// ***** LESSON 28 FUNCTIONS - TYPE GUARDS *****

const processInput = (input: string | number): void => {
  if (typeof input === 'number') {
    console.log(input * 2);
  } else {
    console.log(input.toUpperCase());
  }
};

// ***** LESSON 29 OBJECTS AS PARAMETERS *****

const createEmployee = ({
  id,
}: {
  id: number;
}): { id: number; isActive: boolean } => {
  return {
    id: id,
    isActive: true,
  };
};

const first = createEmployee({ id: 1 });
console.log(first);

// alternative

const createStudent = (student: { id: number; name: string }): void => {
  console.log(`welcome to the course ${student.name.toLocaleUpperCase()}`);
};

const newStudent = {
  id: 5,
  name: 'anna',
};

createStudent(newStudent);

// ***** LESSON 30 EXCESS PROPERTY CHECK *****

// createStudent({ id: 1, name: 'ted', age: 20 });

// ***** LESSON 31 CHALLENGE FUNCTIONS 2 *****

// ## Challenge

// Your task is to create a function named processData that accepts two parameters:

// - The first parameter, input, should be a union type that can be either a string or a number.
// - The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false

// The function should behave as follows:

// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

const processData = (
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
) => {
  if (typeof input === 'number') {
    return input;
  } else {
    if (config.reverse) {
      return input.split('').reverse().join().toUpperCase();
    }
    return input.toUpperCase();
  }
};
// ***** LESSON 32 TYPE ALIAS *****

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// ***** LESSON 33 TYPE ALIAS - ADDITIONAL INFO *****

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'ghell';
value = 8;

type Theme = 'light' | 'dark';

let theme: Theme;
theme = 'dark';

const setTheme = (t: Theme) => {
  theme = t;
};

setTheme('dark');

// ***** LESSON 35 INTERSECTION TYPE *****

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 1,
  name: 'test',
  price: 15,
};

const book2: Book = {
  id: 2,
  name: 'llklkk',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 3,
  name: 'test233',
  price: 20,
  discount: 0.15,
};

// ***** LESSON 36 COMPUTED PROPERTIES *****

const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = {
  [propName]: 5,
};

// ***** LESSON 37 INTERFACE FUNDAMENTALS *****

interface InterfaceBook {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: InterfaceBook = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
};

deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

// ***** LESSON 38 INTERFACE - METHODS *****

interface InterfaceBook2 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork2: InterfaceBook2 = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${message} ${this.title}`;
  },
};

deepWork2.printAuthor();
deepWork2.printTitle('hello');

// ***** LESSON 39 INSTANCE METHODS - MORE OPTIONS *****

interface InterfaceBook3 {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork3: InterfaceBook3 = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${message} ${this.title}`;
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue;
  // },

  // SECOND OPTION
  printSomething: (someValue) => {
    return someValue;
  },
};

deepWork3.printAuthor();
deepWork3.printTitle('hello');
deepWork3.printSomething(34);

// ***** LESSON 30 FUNCTIONS *****
// ***** LESSON 30 FUNCTIONS *****
// ***** LESSON 30 FUNCTIONS *****
// ***** LESSON 30 FUNCTIONS *****
// ***** LESSON 30 FUNCTIONS *****
// ***** LESSON 30 FUNCTIONS *****
// ***** LESSON 30 FUNCTIONS *****
