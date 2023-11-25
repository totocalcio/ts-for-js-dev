export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// すべてoptionalな型を作る
type PartialType = Partial<Profile>;
// type PartialType = {
//   name?: string | undefined;
//   age?: number | undefined;
//   zipCode?: number | undefined;
// }

type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
};

// すべて必須な型を作る
type RequiredType = Required<Profile2>;
// type RequiredType = {
//   name: string;
//   age: number;
//   zipCode: number;
// }
