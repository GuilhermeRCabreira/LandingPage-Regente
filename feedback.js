class Feedback {
  constructor(message) {
    this.message = message;
  }

  validateData() {
    return this.message !== "";
  }
}

class FeedbackDatabase {
  constructor() {
    if (localStorage.getItem("feedbackId") === null) {
      localStorage.setItem("feedbackId", 0);
    }
  }

  getNextId() {
    const nextId = parseInt(localStorage.getItem("feedbackId")) + 1;
    localStorage.setItem("feedbackId", nextId);
    return nextId;
  }

  loadFeedbacks() {
    const feedbacks = [];
    const id = parseInt(localStorage.getItem("feedbackId"));

    for (let i = 1; i <= id; i++) {
      const feedback = JSON.parse(localStorage.getItem(i));
      if (feedback) {
        feedbacks.push({ ...feedback, id: i });
      }
    }

    return feedbacks;
  }

  createFeedback(feedback) {
    const id = this.getNextId();
    localStorage.setItem(id, JSON.stringify(feedback));
  }

  updateFeedback(id, feedback) {
    localStorage.setItem(id, JSON.stringify(feedback));
  }

  removeFeedback(id) {
    localStorage.removeItem(id);
  }
}

const database = new FeedbackDatabase();
let editingId = null;

function registerFeedback() {
  const message = document.getElementById("message").value;
  const feedback = new Feedback(message);

  if (feedback.validateData()) {
    if (editingId) {
      database.updateFeedback(editingId, feedback);
      editingId = null;
    } else {
      database.createFeedback(feedback);
    }
    document.getElementById("message").value = "";
    loadFeedbacks();
  } else {
    console.log("Mensagem vazia não adicionada.");
  }
}

function loadFeedbacks() {
  const feedbacks = database.loadFeedbacks();
  const feedbackList = document.getElementById("feedbacks");
  feedbackList.innerHTML = "";

  feedbacks.forEach((feedback) => {
    const li = document.createElement("li");
    li.className = "feedback-item";

    const messageSpan = document.createElement("span");
    messageSpan.className = "feedback-message";
    messageSpan.textContent = feedback.message;
    li.appendChild(messageSpan);

    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    const editBtn = document.createElement("button");
    editBtn.className = "btn edit-btn";
    editBtn.textContent = "Editar";
    editBtn.onclick = () => {
      document.getElementById("message").value = feedback.message;
      editingId = feedback.id;
    };
    buttonGroup.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn delete-btn";
    deleteBtn.textContent = "Excluir";
    deleteBtn.onclick = () => {
      database.removeFeedback(feedback.id);
      loadFeedbacks();
    };
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(buttonGroup);
    feedbackList.appendChild(li);
  });

  console.log("Feedbacks carregados:", feedbacks);
}

document.addEventListener("DOMContentLoaded", () => {
  loadFeedbacks();
  document
    .getElementById("feedback-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      registerFeedback();
    });
});
