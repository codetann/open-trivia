import { http } from "@lib";

interface Params {
  category: number;
  amount: number;
  difficulty: string;
  type: string;
}

const params = (params: Params) => {
  return `category=${params.category}&amount=${params.amount}&difficulty=${params.difficulty}&type=${params.type}`;
};

export async function getQuestions(data: Params) {
  try {
    const response = await http.get(params(data));
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
