interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export function shuffleAnswers(question: Question) {
  const answers = [...question.incorrect_answers, question.correct_answer];
  return answers.sort(() => Math.random() - 0.5);
}
