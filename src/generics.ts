export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// <型引数>(引数: 引数の型): 戻り値の型 =>
const echo = <T>(arg: T): T => {
  return arg;
};

// 関数名<型引数>(引数)
console.log(echo<number>(100));
console.log(echo<string>("Hello!"));
console.log(echo<boolean>(true));

class Mirror {
  constructor(public value: number) {}
  echo(): number {
    return this.value;
  }
}

console.log(new Mirror(123).echo());

class MirrorGeneric<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new MirrorGeneric<number>(456).echo());
console.log(new MirrorGeneric<string>("Hello, generics!").echo());
console.log(new MirrorGeneric<boolean>(true).echo());
