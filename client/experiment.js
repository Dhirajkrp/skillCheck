const questions = [
  {
    id: 1,
    name: "dhiraj",
  },
];

questions.forEach((ques) => {
  if (ques.id === 1) {
    ques.name = "ram";
  }
});

console.log(questions);
