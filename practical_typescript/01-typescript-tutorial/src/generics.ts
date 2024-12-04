// ***** LESSON 62 GENERICS - INTRO *****
// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ["a", "b"];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true];

// ***** LESSON 63 GENERICS - FIRST FUNCTION AND INTERFACE *****

const genericFunction = <T>(arg: T): T => {
  return arg;
};

type test = 5;

const someString = genericFunction<string>("hi");
const someNumber = genericFunction<number>(6);
const someTest = genericFunction<test>(5);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "hello world",
  getValue() {
    return this.value;
  },
};

// ***** LESSON 64 GENERICS - PROMISE EXAMPLE *****
const someFunc = async (): Promise<test> => {
  return 5;
};

const result = someFunc();

// ***** LESSON 65 GENERICS - CREATE ARRAY *****

const createArray = <T>(length: number, data: T): Array<T> => {
  const array: T[] = [];
  for (let i = 1; i <= length; i++) {
    array.push(data);
  }
  return array;
};

console.log(createArray(5, 100));

// ***** LESSON 66 GENERICS - MULTIPLE TYPES *****

const pair = <T, U>(param1: T, param2: U): [T, U] => {
  return [param1, param2];
};

// ***** LESSON 67 GENERICS - TYPE CONSTRAINTS *****

const processValue = <T extends string | number>(value: T): T => {
  return value;
};

processValue("hello");

// ***** LESSON 68 GENERICS - TYPE CONSTRAINTS SECOND EXAMPLE *****

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

const printName = <T extends { name: string }>(input: T): void => {
  console.log(input.name);
};

printName(student);
// printName(car);

// ***** LESSON 69 GENERICS - DEFAULT TYPES *****

interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 3, 4, 5],
};

const random: StoreData = {
  data: ["random", 1],
};

// ***** LESSON 62 GENERICS - INTRO *****
// ***** LESSON 62 GENERICS - INTRO *****
