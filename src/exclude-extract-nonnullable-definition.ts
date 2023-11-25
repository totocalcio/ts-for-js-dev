export {};

type MyExclude =
  | (string extends string | number ? never : string)
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType);
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;

type MyExtract<T, U> = {
  [K in keyof T]: K extends U ? K : never;
};
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type MyFunctionTypeByExtract = MyExtract<SomeTypes, DebugType>;

type MyNonNullable<T> = {
  [K in keyof T]: K extends null | undefined ? never : K;
};
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
type MyNonNullableTypes = MyNonNullable<NullableTypes>;

// Distributive conditional types
