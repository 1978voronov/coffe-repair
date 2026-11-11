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
  form.reset();
  feedback.textContent = "Учебная заявка заполнена. Данные никуда не отправлены.";
});

form.addEventListener("input", () => {
  problem.setCustomValidity("");
  feedback.textContent = "";
});

document.querySelector("#submit-request").disabled = false;
