export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Excludeは２つhの引数を取る。特定の型を除外したい場合に使う
// １つ目はunion型
// Exclude<T, U>
type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludeFunction = Exclude<SomeTypes, Function>;

// ExtractはExcludeの逆。特定の型を抽出したい場合に使う
// Extract<T, U>
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// NonNullableはnullとundefinedを除外したい場合に使う
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
