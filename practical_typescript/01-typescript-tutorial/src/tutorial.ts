let name: string = "john";
name = "chloe";
name = name.toUpperCase();
console.log(name);

let amount: number = 20;
amount = 12 - 1;
// amount = 'hello'; not number error

let bool: boolean = true;
bool = false;
// bool = 'hello'; not bool error

let test = "test";
// test = 2; inference not string error

// ***** LESSON 12 UNION TYPE *****

let tax: number | string = 10;
tax = "9";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";

// ***** LESSON 13 ANY TYPE *****

let notSure: any = 4;
notSure = "4";
notSure = true;

let anyValue; // infers any type
anyValue = 10;
anyValue = "10";

// ***** LESSON 14 *****

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
  }
  break;
}

console.log(foundBook?.length);

// ***** LESSON 16 ARRAYS *****

let prices: number[] = [100, 2, 4];

prices.push(9);

let fruit: string[] = ["apple", "orange"];

// let randomValues: [] = [0, 9]; error expects empty array

let names = ["peter", "susan", 1];

names.push(9);
let array: (string | boolean)[] = ["apple", true];

// ***** LESSON 18 OBJECT FUNDAMENTALS *****

let car: { brand: string; year: number } = {
  brand: "ford",
  year: 2020,
};

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 20 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = 'book2' readonly error
book.title = "book2"; // can still change original object

// ***** LESSON 20 FUNCTIONS *****

const sayHi = (name: string) => {
  return `hi ${name}`;
};

const useSayHi = sayHi("paul");
useSayHi.toLocaleUpperCase();

console.log(sayHi("john"));

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

const namesArray: string[] = ["john", "paul"];

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

console.log(checkName("john", namesArray));

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

let sumResult = sum("the total is", 1, 2, 3, 4, 4, 5, 6, 7);

// ***** LESSON 27 FUNCTIONS - VOID KEYWORD *****

const log = (message: string) => {
  console.log(message);
};

log("hllo");

// ***** LESSON 28 FUNCTIONS - TYPE GUARDS *****

const processInput = (input: string | number): void => {
  if (typeof input === "number") {
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
  name: "anna",
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
  if (typeof input === "number") {
    return input;
  } else {
    if (config.reverse) {
      return input.split("").reverse().join().toUpperCase();
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
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// ***** LESSON 33 TYPE ALIAS - ADDITIONAL INFO *****

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "ghell";
value = 8;

type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";

const setTheme = (t: Theme) => {
  theme = t;
};

setTheme("dark");

// ***** LESSON 35 INTERSECTION TYPE *****

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 1,
  name: "test",
  price: 15,
};

const book2: Book = {
  id: 2,
  name: "llklkk",
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 3,
  name: "test233",
  price: 20,
  discount: 0.15,
};

// ***** LESSON 36 COMPUTED PROPERTIES *****

const propName = "age";

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
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
};

deepWork.title = "New Title"; // allowed
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
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${message} ${this.title}`;
  },
};

deepWork2.printAuthor();
deepWork2.printTitle("hello");

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
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
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
deepWork3.printTitle("hello");
deepWork3.printSomething(34);

// ***** LESSON 41 INTERFACE - MERGE AND EXTEND *****

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

interface Employee extends Person {
  id: number;
}

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const person: Person = {
  name: "john",
  age: 20,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

person.getDetails();

const employee: Employee = {
  name: "jane",
  age: 30,
  id: 1,
  getDetails() {
    return `${this.name} ${this.age}, ${this.id}`;
  },
};

employee.getDetails();

const manager: Manager = {
  name: "Bob",
  age: 40,
  dogName: "rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Name: ${this.dogName}`;
  },
  managePeople() {
    console.log("manage people");
  },
};

manager.managePeople();

// ***** LESSON 44 INTERFACE - TYPE PREDICATE FUNCTIONS *****
interface Person2 {
  name: string;
}

interface DogOwner2 extends Person2 {
  dogName: string;
}

interface Manager2 extends Person2 {
  managePeople(): void;
  delegateTasks(): void;
}

const employee2: Person2 | DogOwner2 | Manager2 = getEmployee();
console.log(employee2);

function getEmployee(): Person2 | DogOwner2 | Manager2 {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "john",
    };
  } else if (random < 0.66) {
    return {
      name: "sarah",
      dogName: "Rex",
    };
  } else {
    return {
      name: "bob",
      managePeople: () => console.log("Managing people..."),
      delegateTasks: () => console.log("Delegating tasks..."),
    };
  }
}

function isManager(obj: Person2 | DogOwner2 | Manager2): obj is Manager2 {
  return typeof obj === "object";
}
// ***** LESSON 45 TUPLE *****

let personTuple: [string, number] = ["john", 25];

// ***** LESSON 46 ENUM FUNDAMENTALS *****

enum ServerResponseStatus {
  SUCCESS,
  ERROR,
}

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

const getServerResponse = (): ServerResponse => {
  return {
    result: ServerResponseStatus.ERROR,
    data: ["hello9"],
  };
};

const response: ServerResponse = getServerResponse();

// ***** LESSON 49 TYPE ASSERTION *****

let someValue: any = "hello";

let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(birdString);

let bird = birdObject as Bird;

enum Status {
  Pending = "pending",
  Declined = "declined",
}

// ***** LESSON 50 TYPE - UNKNOWN *****

let unkownValue: unknown;

unkownValue = "hello world";
unkownValue = [1, 2, 3];
unkownValue = 3;

if (typeof unkownValue === "number") {
  unkownValue.toFixed(2);
}

const runSomeCode = () => {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("there was a error");
  } else {
    throw "some error";
  }
};

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// ***** LESSON 51 TYPE - NEVER *****

// let someNeverValue: never = 0;

type Theme2 = "light" | "dark";

const checkTheme = (theme: Theme2): void => {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  theme;
};

enum Color {
  red,
  blue,
  green,
}

const getColorName = (color: Color) => {
  switch (color) {
    case Color.red:
      return "red";
    case Color.blue:
      return "blue";
    case Color.green:
      return "green";
    default:
      // at build time
      let unexpectedColor: never = color;
    //at run time
    // throw new Error(color);
  }
};

console.log(getColorName(Color.red));
console.log(getColorName(Color.blue));

// ***** LESSON 52 MODULES - INTRO *****

const name2 = "";
const susan2 = "susan"; // declared in actions.ts. Everything is in global scope

// ***** LESSON 53 MODULES - ES6 *****

import newStudentA, { sayHello, personEx, type Student } from "./actions";
sayHello("blah blah");
console.log(newStudentA);
console.log(personEx);

const anotherStudent: Student = {
  name: "bob",
  age: 30,
};

// ***** LESSON 54 MODULES - JS FILE *****
// need to cange ts config to use js file for imports in typescript

// ***** LESSON 56 - 61 TYPE GUARDS *****
// see type_guards.ts

// ***** LESSON 62 - 69 GENERICS *****
// generics.ts

// ***** LESSON 70 FETCH DATA - BASICS *****

import { z } from "zod";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

const url = "https://www.course-api.com/react-tours-project";

const fetchData = async (url: string): Promise<Tour[]> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ERROR : ${response.status}`);
    }

    const rawData: Tour[] = await response.json();

    const result = tourSchema.array().safeParse(rawData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    console.log(result.data);
    return result.data;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "there was error";
    console.log(errorMsg);
    return [];
  }
};

const tours = await fetchData(url);
tours.map((tour) => console.log(tour.name));

// ***** LESSON 70 FETCH DATA - FUNCTIONS *****
// ***** LESSON 70 FETCH DATA - FUNCTIONS *****
// ***** LESSON 50 FUNCTIONS *****
// ***** LESSON 50 FUNCTIONS *****
