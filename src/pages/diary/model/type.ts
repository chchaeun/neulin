type Meal = "아침" | "점심" | "저녁";
type Sleep = "기상" | "취침";

interface Info {
  meal: {
    name: Meal;
    time: number;
  }[];
  sleep: {
    name: Sleep;
    time: number;
  }[];
}

export type { Meal, Sleep, Info };
