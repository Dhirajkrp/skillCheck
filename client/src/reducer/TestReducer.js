// defining a constant for the timer
const SECONDS_PER_QUESTION = 60;

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  isAnswered: false,
  //the status of the test can be : 'loading' ,'ready', 'active' , 'error' , 'finshed'
  status: "loading",
  secondsRemaining: null,
};

const reducer = function (state, action) {
  let currIndex;
  switch (action.type) {
    case "dataFetched":
      const questionList = action.payload.map((ques) => {
        return { ...ques, isAnswered: false, selectedOption: null };
      });
      return {
        ...state,
        questions: questionList,
        status: "ready",
      };
    case "error":
      return {
        ...state,
        status: "error",
      };
    case "startTest":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case "setQuestion":
      currIndex = action.payload;
      return {
        ...state,
        index: currIndex,
        isAnswered: state.questions.at(currIndex).isAnswered,
        answer: state.questions.at(currIndex).selectedOption,
      };
    case "setAnswer":
      state.questions.at(state.index).isAnswered = true;
      state.questions.at(state.index).selectedOption = action.payload;
      return {
        ...state,
        answer: state.questions.at(state.index).selectedOption,
        isAnswered: true,
      };

    case "nextQuestion":
      currIndex = state.index + 1;
      return {
        ...state,
        index: currIndex,
        isAnswered: state.questions.at(currIndex).isAnswered,
        answer: state.questions.at(currIndex).selectedOption,
      };
    case "prevQuestion":
      currIndex = state.index - 1;
      return {
        ...state,
        index: currIndex,
        isAnswered: state.questions.at(currIndex).isAnswered,
        answer: state.questions.at(currIndex).selectedOption,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    case "submitTest":
      return {
        ...state,
        status: "finished",
      };
    default:
      throw new Error("Not a valid action for the reducer");
  }
};

export { reducer, initialState };
