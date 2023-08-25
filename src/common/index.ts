import type { questionInterface } from "./interfaces";

export const getQuestions = async () => {
  return await fetch("http://localhost:3000/questions", {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((res: questionInterface[]) => {
      return res;
    });
};
