const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const sec = document.querySelector(".sec");
const start = document.querySelector(".start");
const sethours = document.querySelector("#h");
const setminutes = document.querySelector("#m");
const setseconds = document.querySelector("#s");
sethours.value = `0`;
setminutes.value = `0`;
setseconds.value = `0`;
sec.textContent = `0` + `${setseconds.value}`;
minutes.textContent = `0` + `${setminutes.value}`;
hours.textContent = `0` + `${sethours.value}`;
sethours.addEventListener("click", () => {
  sethours.value = ``;
});
setminutes.addEventListener("click", () => {
  setminutes.value = ``;
});
setseconds.addEventListener("click", () => {
  setseconds.value = ``;
});
const setstart = () => {
  if (setseconds.value < 10) {
    sec.textContent = `0` + `${setseconds.value}`;
  } else if (setseconds.value > 10 && setseconds.value <= 60) {
    sec.textContent = setseconds.value;
  }
  if (sethours.value < 10) {
    hours.textContent = `0` + `${sethours.value}`;
  } else if (sethours.value > 10 && sethours.value <= 60) {
    hours.textContent = sethours.value;
  }
  if (setminutes.value < 10) {
    minutes.textContent = `0` + `${setminutes.value}`;
  } else if (setminutes.value > 10 && setminutes.value <= 60) {
    minutes.textContent = setminutes.value;
  }
};

const st = () => {};
