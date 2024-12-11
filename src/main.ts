let counter = 0;

const counterFn = (counter: number) => {
  return () => {
    return counter++;
  };
};

const counter1 = counterFn(counter);
const counter2 = counterFn(counter);

console.log(counter1());
console.log(counter2());
