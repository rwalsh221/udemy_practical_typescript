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
