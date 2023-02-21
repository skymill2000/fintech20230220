let car = {
  name: "sonata",
  ph: 160,
  year: 2022,
  start: () => {
    console.log("engine start!!");
  },
  stop: () => {
    console.log("engine stop!!");
  },
};
console.log(car.name);
console.log(car.ph);
car.start();
car.stop();
