import type { questionInterface, resultInterface } from "./interfaces";

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

export const getResult = async () => {
  return await fetch("http://localhost:3000/results", {
    headers: {
      "content-type": "application/json",
    },
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((res: resultInterface[]) => {
      return res;
    });
};
