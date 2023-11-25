export {};

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;
// (...args: any) => any: 関数の型
// infer R: 返り値の型をRとして取得する
// T extends (...args: any) => infer R: Tが関数の型であればRを返す

// infer:条件をかくときに使う特殊な型
// 条件式中にジェネリクス型を使える
// Conditional Types で重要な機能

// Tについて
// 使いたい理由は：複数回使いたいから・何がくるかわからないから
// 型名の直後にしかかけない
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
