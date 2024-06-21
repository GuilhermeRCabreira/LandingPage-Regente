document.addEventListener("DOMContentLoaded", function () {
  const defaultButton = document.getElementById("btn-daily"); // ID do botão que deseja iniciar selecionado
  updateContent("Daily", defaultButton); // Chama a função updateContent com o botão selecionado
});

// Dados de funcionalidades
const functionalities = {
  Daily: {
    title: "Diário de Emoções",
    description:
      "Registre diariamente seus níveis de ansiedade e tristeza.Acompanhe seus horários de sono, exposição à luz, atividades de trabalho/estudo, exercícios e alimentação.",
    image: "./assets/cronotipo.png",
  },
  Questionary: {
    title: "Questionários de Bem-Estar",
    description:
      "With a single codebase, you can create apps for multiple platforms, making your development process more productive.",
    image: "./assets/productive.png",
  },
  Visual: {
    title: "Acompanhamento Visual de Dados",
    description:
      "Flutter provides a high degree of flexibility in designing custom interfaces and building complex applications.",
    image: "./assets/flexible.png",
  },
  Security: {
    title: "Segurança e Privacidade",
    description:
      "Flutter provides a high degree of flexibility in designing custom interfaces and building complex applications.",
    image: "./assets/flexible.png",
  },
};

// Função para atualizar o conteúdo
function updateContent(feature, button) {
  const { title, description, image } = functionalities[feature];

  document.getElementById("feature-title").textContent = title;
  document.getElementById("feature-description").textContent = description;
  document.getElementById("feature-image").src = image;

  // Remover classe 'selected' de todos os botões
  const buttons = document.querySelectorAll(".button-group button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // Adicionar classe 'selected' ao botão clicado
  button.classList.add("selected");
}
