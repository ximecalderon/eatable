const arr = [
  { id: 1, value: 10 },
  { id: 2, value: 20 },
  { id: 3, value: 30 },
];

const sum = arr.map((arr) => {
  return arr.value;
});

const suma = sum.reduce((a, b) => a + b);
const tst = arr.find((x) => x.id == 1);

tst.id = 20;
tst.value = 5;

console.log(arr);
