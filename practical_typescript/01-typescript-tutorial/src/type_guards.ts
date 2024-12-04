// ***** LESSON 55 TYPE GUARDS - TYPEOF *****
type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

const checkValue = (value: ValueType): void => {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  } else {
    console.log(`bool ${value}`);
    return;
  }
};

checkValue(value);

// ***** LESSON 56 TYPE GUARDS EQUALITY AND 'IN' *****

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

const makeSound = (animal: Animal): void => {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
};

// check for property
const makeSound2 = (animal: Animal): void => {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
};

makeSound({
  type: "cat",
  name: "jasper",
  meow: () => {
    console.log("meow");
  },
});
// ***** LESSON 57 TYPE GUARDS - TRUTHY AND FALSY *****

const printLength = (str: string | null | undefined) => {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no string provided");
  }
};

printLength("hello");

// ***** LESSON 58 TYPE GUARDS - INSTANCEOF *****

try {
  // Some code that may throw an error
  throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message);
  } else {
    console.log("Caught an unknown error");
  }
}

function checkInput(input: Date | string) {
  if (input instanceof Date) {
    return input.getFullYear();
  } else {
    return input;
  }
}
// ***** LESSON 59 TYPE GUARDS - TYPE PREDICATE *****

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("Studying") }
    : { name: "mary", login: () => console.log("Logging in") };
};

const person = randomPerson();

// ***** LESSON 61 TYPE GUARDS - DISCRIMINATED UNIONS *****
type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;

    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456,
});
