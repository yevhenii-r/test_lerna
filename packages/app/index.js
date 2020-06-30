const first = require('@monorepo/first');
const second = require('@monorepo/second');

const app = () => 'Hi from the application';

const main = () => {
  console.log(app());
  console.log(first());
  console.log(second());
};

main();

module.exports = { app, main };
