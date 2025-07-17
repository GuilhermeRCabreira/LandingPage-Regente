document.addEventListener("DOMContentLoaded", function () {
  const featureContent = {
    Daily: {
      title: "Diário de Emoções",
      description:
        "Registre seus sentimentos e pensamentos diariamente de forma simples e intuitiva. Acompanhe seu humor ao longo do tempo e identifique padrões para um maior autoconhecimento.",
      image: "./assets/diario.png",
    },
    Questionary: {
      title: "Questionários de Bem-Estar",
      description:
        "Responda a questionários baseados em evidências científicas para avaliar diferentes aspectos da sua saúde mental, como estresse, ansiedade e qualidade do sono.",
      image: "./assets/questionario.png",
    },
    Visual: {
      title: "Acompanhamento Visual de Dados",
      description:
        "Visualize seu progresso através de gráficos e relatórios claros e fáceis de entender. Veja como suas emoções e bem-estar evoluem com o tempo.",
      image: "./assets/grafico.png",
    },
    Security: {
      title: "Segurança e Privacidade",
      description:
        "Seus dados são criptografados e armazenados com segurança. Temos um forte compromisso com sua privacidade, garantindo que suas informações permaneçam confidenciais.",
      image: "./assets/lgpd.png",
    },
  };

  // --- Elementos ---
  const featureTitle = document.getElementById("feature-title");
  const featureDescription = document.getElementById("feature-description");
  const featureImage = document.getElementById("feature-image");
  const buttons = document.querySelectorAll(".button-group button");
  const downloadButton = document.getElementById("downloadButton");
  const notification = document.getElementById("notification");

  // --- Update  ---
  window.updateContent = function (featureKey, clickedButton) {
    const content = featureContent[featureKey];
    if (content) {
      featureTitle.textContent = content.title;
      featureDescription.textContent = content.description;
      featureImage.src = content.image;

      // Update selected button style
      buttons.forEach((button) => button.classList.remove("selected"));
      clickedButton.classList.add("selected");
    }
  };

  // --- Download Button Notification ---
  downloadButton.addEventListener("click", function () {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000); // Hide after 3 seconds
  });

  // --- Set Initial Content ---
  // Trigger a click on the first button to load initial content
  document.getElementById("btn-daily").click();
});
