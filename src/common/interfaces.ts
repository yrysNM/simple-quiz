export type tAns = {
  text: string;
  is_correct: boolean;
};

export interface questionInterface {
  q: string;
  answers: tAns[];
}

export interface resultInterface {
  min: number;
  max: number;
  title: string;
  desc: string;
}
