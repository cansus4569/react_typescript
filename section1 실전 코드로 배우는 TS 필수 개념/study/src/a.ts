// interface Person {
//   name: string;
//   age: number; // number
// }

// interface Developer {
//   name: string;
//   age: string; // string
// }

// interface Admin {
//   name: string;
//   age: boolean; // boolean
// }

// 제네릭을 사용하는 이유
interface Anyone<T> {
  name: string;
  age: T;
}

// const josh: Person = {
//   name: 'Josh',
//   age: 100,
// };

// const test: Developer = {
//   name: 'test',
//   age: false,
// };

const anyone: Anyone<boolean> = {
  name: 'anyone',
  age: false,
};
