const account = {
  owner: "jonas",
  movements: [200, 300, -400, 5000],

  get LatestMovement() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.LatestMovement);

account.latest = 50;
console.log(account.movements);
