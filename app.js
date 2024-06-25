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
    image: "./assets/diario.png",
  },
  Questionary: {
    title: "Questionários de Bem-Estar",
    description:
      "Responda a questionários personalizados para avaliar seu bem-estar emocional e mental. Receba feedback imediato e dicas para melhorar sua qualidade de vida com base nas suas respostas. Nossos questionários são desenvolvidos por especialistas para garantir uma avaliação precisa e útil.",
    image: "./assets/questionario.png",
  },
  Visual: {
    title: "Acompanhamento Visual de Dados",
    description:
      "Visualize seus dados de forma clara e intuitiva. Gráficos e tabelas interativos permitem acompanhar suas emoções, atividades e hábitos ao longo do tempo, facilitando a identificação de padrões e tendências. Compreenda melhor seu estado emocional e físico com nossos recursos visuais detalhados.",
    image: "./assets/grafico.png",
  },
  Security: {
    title: "Segurança e Privacidade",
    description:
      "Sua segurança e privacidade são nossa prioridade. Todos os dados registrados no aplicativo são protegidos por criptografia de ponta a ponta. Garantimos que suas informações pessoais serão mantidas confidenciais e seguras, respeitando a Lei Geral de Proteção de Dados(LGPD).",
    image: "./assets/lgpd.png",
  },
};

function updateContent(feature, button) {
  const { title, description, image } = functionalities[feature];

  document.getElementById("feature-title").textContent = title;
  document.getElementById("feature-description").textContent = description;
  document.getElementById("feature-image").src = image;

  const buttons = document.querySelectorAll(".button-group button");
  buttons.forEach((btn) => btn.classList.remove("selected"));

  button.classList.add("selected");
}

document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const notification = document.getElementById("notification");
    notification.classList.remove("hidden");

    setTimeout(function () {
      notification.classList.add("hidden");
    }, 3000); // Notificação desaparece após 3 segundos
  });
