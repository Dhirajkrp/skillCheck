const questioContainer = document.querySelector(".question-container");
const searchBtn = document.querySelector("#searchBtn");
const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("#form");
const searchVal = document.querySelector("#searchVal");
const searchParam = document.querySelector("#searchParam");

//fucntion to display questions

const displayQuestions = (questions) => {
  const htmlContent = questions.map((ques, index) => {
    return `<div class="single-question">
      <h4 class="qestion">Q.${index + 1}
      ${ques.question}
      </h4>
      <ul>
      ${ques.options.map(
        (option, index) => `<li>${index + 1}.  ${option}</li>`
      )}
      </ul>
      <div class="options">
        <button class ='editButton' onclick="editQuestion(${
          ques._id
        })">Edit</button>
        <button class ='deleteButton' onclick="deleteQuestion(${
          ques._id
        })">Delete</button>
      </div>
    </div>`;
  });

  questioContainer.innerHTML = htmlContent;
};

const displayError = (message) => {
  const htmlContent = `
  <div class="single-question">
      <h4 class="qestion">
      ${message}
      </h4>
      </div>
    </div>`;

  questioContainer.innerHTML = htmlContent;
};

const getAllQuestion = async () => {
  try {
    const result = await axios.get("/api/questions/");

    displayQuestions(result.data);
  } catch (error) {
    displayError(error.message);
  }
};

const getQuestionById = async (id) => {
  try {
    const result = await axios.get(`/api/questions/${id}`);

    displayQuestions(result.data);
  } catch (error) {
    displayError(`No question found for id: ${id}`);
  }
};
const getQuestionsByTag = async (tagName) => {
  try {
    const result = await axios.get(`/api/questions/tag/${tagName}`);

    displayQuestions(result.data);
  } catch (error) {
    displayError(`No question found for tag : ${tagName}`);
  }
};

getAllQuestion();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = searchVal.value;
  const param = searchParam.value;

  if (param == "id") {
    getQuestionById(value);
  }
  if (param == "tag") {
    getQuestionsByTag(value);
  }
});

addBtn.addEventListener("click", () => {
  displayError("Only I can add questios Wah Hah Hah!!!!");
});
const editQuestion = (id) => {
  console.log(`about to edit question with id : ${id} `);
  openEditModal(id);
};

const deleteQuestion = (id) => {
  displayError(`Itni mushkil se question dala tha &#128557;&#128557;`);
  setTimeout(() => {
    displayError(`Chal Aab Refresh kar`);
  }, 3000);
};

// JavaScript code to handle the modal
const editModal = document.getElementById("editModal");
const closeModalButton = document.getElementById("closeModal");
const editForm = document.getElementById("editForm");

// Function to open the modal and populate it with question data
async function openEditModal(questionId) {
  const modal = editModal;
  try {
    const result = await axios.get(`/api/questions/${questionId}`);
    const question = result.data[0];

    // Populate the form fields with the current question data
    document.getElementById("editQuestion").value = question.question;
    document.getElementById("editOptions").value = question.options.join("\n");
    document.getElementById("editTags").value = question.tags.join(", ");
    document.getElementById("editAnswer").value = question.answer;

    // Display the modal
    modal.style.display = "block";
  } catch (error) {
    displayError(error.message);
  }
}

// Function to close the modal
function closeEditModal() {
  const modal = editModal;
  modal.style.display = "none";
}

// Event listener to close the modal when clicking the close button
closeModalButton.addEventListener("click", closeEditModal);

// Event listener to close the modal when clicking outside the modal
window.addEventListener("click", (event) => {
  if (event.target === editModal) {
    closeEditModal();
  }
});

// Event listener to submit the form (you can add your form submission logic here)
editForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Lol, You though i would implement everything");

  closeEditModal();
});
