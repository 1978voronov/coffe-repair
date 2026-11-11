"use strict";

const form = document.querySelector("#repair-form");
const problem = document.querySelector("#problem");
const feedback = document.querySelector("#status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!problem.value.trim()) {
    problem.setCustomValidity("Кратко опишите, что случилось с кофемашиной.");
    problem.reportValidity();
    return;
  }
  const machineType = form.elements.namedItem("machine-type").value;
  form.reset();
  feedback.textContent = machineType
    ? `Учебная заявка заполнена. Тип кофемашины — ${machineType.toLowerCase()}. Данные никуда не отправлены.`
    : "Учебная заявка заполнена. Данные никуда не отправлены.";
});

form.addEventListener("input", () => {
  problem.setCustomValidity("");
  feedback.textContent = "";
});

document.querySelector("#submit-request").disabled = false;

const title = document.querySelector("#title");
const titleText = title.querySelector(".hero-title-text");

function fitTitle() {
  const availableWidth = title.clientWidth;
  const textWidth = titleText.getBoundingClientRect().width;
  if (!availableWidth || !textWidth || Math.abs(availableWidth - textWidth) < 1) return;

  const currentSize = parseFloat(getComputedStyle(title).fontSize);
  const fittedSize = Math.floor(currentSize * (availableWidth - 0.5) / textWidth * 100) / 100;
  title.style.fontSize = `${fittedSize}px`;
}

new ResizeObserver(fitTitle).observe(title);
document.fonts.ready.then(fitTitle);
