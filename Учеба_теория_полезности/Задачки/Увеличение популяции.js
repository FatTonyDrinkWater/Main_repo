function nbYear(p0, percent, aug, p) {
  percent = percent / 100;
  let inhabitans = p0 + p0 * percent + aug;
  let fullYears = 1;
  while (inhabitans < p) {
    inhabitans = inhabitans + inhabitans * percent + aug;
    fullYears++;
  }
  return fullYears;
}
nbYear(1500, 5, 100, 5000);

function nbYear(p0, percent, aug, p) {
  var count = 0;
  while (p0 < p) {
    p0 += (p0 * percent) / 100 + aug; //  скобки от вскода
    count++;
  }
  return count;
}
