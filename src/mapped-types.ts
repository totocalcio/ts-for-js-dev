export {};

// in keyof T

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// keyof: オブジェクトのプロパティ名を文字列リテラル型（ユニオン型）として取得する
type PropertyTypes = keyof Profile;

type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalProfile = Optional<Profile>;
