"use strict";
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const sec = document.querySelector(".sec");
const start = document.querySelector(".start");
const sethours = document.querySelector("#h");
const setminutes = document.querySelector("#m");
const setseconds = document.querySelector("#s");
const zone = document.querySelector(".zone");
const sound = document.querySelector(".alarmsound");
const setzone = document.querySelector("#zo");
//sound
const alarmSound = new Audio("sound.mp3");

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
// const settingAlarm = () => {
//   let selectedhours = sethours.value;
//   let selectedminutes = setminutes.value;
//   let selectedseconds = setseconds.value;

let h = 0;
let m = 0;
let s = 0;
let z = "AM";
const set = () => {
  h = sethours.value;
  m = setminutes.value;
  s = setseconds.value;
  z = setzone.value;

  console.log(h, m, s);
  return h, m, s;
};

const star = () => {
  while (
    h == hours.textContent &&
    m == minutes.textContent &&
    s == sec.textContent &&
    z == zone.textContent
  ) {
    sound.play();
  }
};

const stop = () => {
  sound.pause();
};
