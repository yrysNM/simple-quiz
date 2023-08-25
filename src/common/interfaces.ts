export type tAns = {
  text: string;
  is_correct: boolean;
};

export interface questionInterface {
  q: string;
  answers: tAns[];
}
