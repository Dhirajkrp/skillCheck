const questions = [
  {
    id: 1,
    name: "dhiraj",
    setName(newName) {
      this.name = newName;
    },
  },
];

questions.forEach((ques) => {
  ques.setName("ram");
});

console.log(questions);
