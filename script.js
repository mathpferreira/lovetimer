// Função para ocultar uma tela com animação
function hideScreen(screenId) {
  return gsap.to(`#${screenId}`, {
    opacity: 0,
    duration: 0.3,
    display: "none",
  });
}

// Função para mostrar uma tela com animação
function showScreen(screenId) {
  return gsap.fromTo(
    `#${screenId}`,
    { opacity: 0, display: "none" },
    { opacity: 1, duration: 0.3, display: "block" }
  );
}

function hideScreenZoomOut(screenId) {
  return gsap.to(`#${screenId}`, {
    scale: 0.8,
    opacity: 0,
    duration: 0.3,
    display: "none",
  });
}

function showScreenZoomIn(screenId) {
  return gsap.fromTo(
    `#${screenId}`,
    { scale: 1.2, opacity: 0, display: "none" },
    { scale: 1, opacity: 1, duration: 0.3, display: "block" }
  );
}


// Adapte as funções existentes para usar GSAP
function goHome() {
  hideScreen("counter-screen")
    .then(() => hideScreen("matteo-screen"))
    .then(() => hideScreen("how-mutch-time-screen"))
    .then(() => showScreenZoomIn("home-screen"));
}

function showCounter() {
  hideScreen("home-screen")
    .then(() => showScreenZoomIn("counter-screen"))
    .then(updateTime); // Atualiza o contador após a animação
}

function showMatteo() {
  hideScreenZoomOut("home-screen").then(() =>
    showScreenZoomIn("matteo-screen")
  );
}

function showHowMutchTime() {
  hideScreen("home-screen")
    .then(() => showScreenZoomIn("how-mutch-time-screen"))
    .then(updateTimeHowMutchTime); // Atualiza o contador após a animação
}

// Função para atualizar o contador de tempo
function updateTime() {
  const startDate = new Date("2023-10-21T19:02:00"); // Data e hora de início
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months % 12;
  document.getElementById("days").textContent = days % 30;
  document.getElementById("hours").textContent = hours % 24;
  document.getElementById("minutes").textContent = minutes % 60;
  document.getElementById("seconds").textContent = seconds % 60;
}


// Função para atualizar o contador de tempo(que nos conhecemos)
function updateTimeHowMutchTime() {
  const startDate = new Date("2023-05-01"); // Defina a data de início
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  document.getElementById("years-mt").textContent = years;
  document.getElementById("months-mt").textContent = months % 12;
  document.getElementById("days-mt").textContent = days % 30;
  document.getElementById("hours-mt").textContent = hours % 24;
  document.getElementById("minutes-mt").textContent = minutes % 60;
  document.getElementById("seconds-mt").textContent = seconds % 60;
}

// Adiciona a classe 'loaded' ao corpo da página após o carregamento completo
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// Atualiza o contador a cada segundo
setInterval(updateTime, 1000);
setInterval(updateTimeHowMutchTime, 1000);
