export {};

class VisaCard {
  // readonly owner: string;

  constructor(public readonly _owner: string) {}
  // this.owner = owner;
}

let myVisaCard = new VisaCard("ととかるちょ");
console.log(myVisaCard._owner);
// myVisaCard._owner = "ぎんちゃん";
