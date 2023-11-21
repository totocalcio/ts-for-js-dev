export {};

let name: any = "Toto";
// 型システムとしては早ければ早いほうがいい
// let length = name.length as number;
let length = (<string>name).length;

// length = "foo";
// console.log(length);
