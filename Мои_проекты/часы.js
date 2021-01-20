// Обычные часы
let clock = function () {
  let date = new Date();
  let h = date.getHours().toString();
  let m = date.getMinutes().toString();
  let s = date.getSeconds().toString();

  h.length < 2 ? (h = "0" + h) : (h = h);
  m.length < 2 ? (m = "0" + m) : (m = m);
  s.length < 2 ? (s = "0" + s) : (s = s);
  // console.log(s);
  let clockString = `${h}:${m}:${s}`;
  DOMclock.innerText = clockString;
};
