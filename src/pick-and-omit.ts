export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// keyof プロパティ取得

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;
type SmallProfile = Omit<DetailedProfile, "height">;

type MyOmit = Pick<DetailedProfile, "name" | "weight">;
type MySmallProfile = MyOmit;
