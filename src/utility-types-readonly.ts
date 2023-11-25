export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Toto",
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "Calcio",
  age: 40,
};

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
