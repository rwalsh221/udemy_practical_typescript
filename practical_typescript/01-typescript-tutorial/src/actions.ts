export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let personEx = "susan";

export type Student = {
  name: string;
  age: number;
};

const newStudentA: Student = {
  name: "peter",
  age: 30,
};

export default newStudentA;
