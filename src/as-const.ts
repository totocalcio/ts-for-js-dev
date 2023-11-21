export {};

let name = "Kame";
name = "Toto";

let nickname = "Toto" as const;
nickname = "Toto";

// ネストされたプロパティをすべてreadonlyにする
let profile = {
  name: "Kame",
  height: 180,
} as const;

// profile.name = "Toto";
// profile.height = 190;
