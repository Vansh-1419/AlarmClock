"use strict";
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const sec = document.querySelector(".sec");
const start = document.querySelector(".start");
const sethours = document.querySelector("#h");
const setminutes = document.querySelector("#m");
const setseconds = document.querySelector("#s");
const zone = document.querySelector(".zone");

//Clock
const clock = () => {
  const current = new Date();
  hours.textContent = current.getHours();
  minutes.textContent = current.getMinutes();
  sec.textContent = current.getSeconds();
  zone.textContent = hours.textContent >= 12 ? `PM` : `AM`;
  minutes.textContent = checkTime(minutes.textContent);
  sec.textContent = checkTime(sec.textContent);
  if (current.getHours() == 0) {
    hours.textContent = 12;
  }
  if (current.getHours() > 12) {
    hours.textContent = current.getHours() - 12;
  }
  setTimeout(clock, 1000);
};
const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
    return i;
  } else {
    return i;
  }
};

//Setting the alarm
const settingAlarm = () => {};
