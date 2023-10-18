const questions = [
  {
    _id: 1,
    language: "java",
    question: "How do you declare a two-dimensional array in Java?",

    options: [
      "int[][] array;",
      "array[] = new int[2][2];",
      "int[] array = new int[2,2];",
      "int[2][2] array;",
    ],
    answer: 1,
    tags: ["java", "arrays"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 2,
    language: "java",

    question: "Which of the keyword is used to define a constant in Java?",
    options: ["var", "final", "static", "const"],
    answer: 1,
    tags: ["java", "variables", "basics"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 3,
    language: "java",

    question:
      "What is the purpose of the 'break' statement in a Java switch-case statement?",
    options: [
      "To exit the loop",
      "To skip the current iteration",
      "To terminate the switch-case block",
      "To continue to the next case",
    ],
    answer: 2,
    tags: ["java", "controlFlow"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 4,
    language: "java",

    question:
      "Which Java access modifier allows a class to be accessed from any other class?",
    options: ["private", "protected", "package-private", "public"],
    answer: 3,
    tags: ["java", "accessModifiers"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 5,
    language: "java",

    question: "In Java, what is the purpose of the 'super' keyword?",
    options: [
      "To access the superclass constructor",
      "To call a static method",
      "To declare a constant",
      "To create a new object",
    ],
    answer: 0,
    tags: ["java", "inheritance"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 6,
    language: "java",

    question: "Which data structure is used to implement a stack in Java?",
    options: ["ArrayList", "LinkedList", "Array", "Stack"],
    answer: 0,
    tags: ["java", "dataStructures"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 7,
    language: "java",

    question:
      "What is the main purpose of the 'finally' block in a Java try-catch-finally statement?",
    options: [
      "To catch exceptions",
      "To handle exceptions",
      "To execute code regardless of exceptions",
      "To rethrow exceptions",
    ],
    answer: 2,
    tags: ["java", "exceptionHandling"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 8,
    language: "java",

    question:
      "Which Java interface is used to implement event handling for graphical user interfaces?",
    options: ["Runnable", "Serializable", "MouseListener", "Comparable"],
    answer: 2,
    tags: ["java", "GUI"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 9,
    language: "java",

    question:
      "What is the default value of a Java instance variable of type int?",
    options: ["0", "1", "null", "undefined"],
    answer: 0,
    tags: ["java", "variables"],
    contentType: { questionType: "text", answerType: "text" },
  },
  {
    _id: 10,
    language: "java",

    question:
      "What is the output of the following Java code snippet?\n\n```\npublic class Main {\n  public static void main(String[] args) {\n    int x = 5;\n    System.out.println(x++ + ++x);\n  }\n}\n```",
    options: ["10", "11", "12", "13"],
    answer: 3,
    tags: ["java", "operators"],
    contentType: { questionType: "code", answerType: "text" },
  },
];

export { questions };
