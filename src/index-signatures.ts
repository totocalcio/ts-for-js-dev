export {};

type Profile = {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
};

let profile: Profile = { name: "Toto", underTwenty: false };

// オブジェクトの添字への型注釈の書き方→index signatures
// Keyに該当する箇所をアノテーションする
// How to write index signatures
// ※ indexは仮の名前
// { [ index: typeForIndex ]: typeForValue }
profile.name = "Toto";
profile.age = 43;
profile.nationality = "Japan";
