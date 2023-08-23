/*
A factory function returns a new object. Use Object.create() to create an object using an existing object as a prototype.
We will use the factory pattern to output an object with a person's first name, the amount earned after a 2% interest and the original deposit..
*/

let calculateReturn = {
  getAccountResult() {
    return 'Firstname:' + this.firstName + ', Return amount: ' + (this.deposit * 1.02) + ', Deposit amount: ' + this.deposit;
  },
};

function createInvestor(firstName, deposit) {
  let investor = Object.create(calculateReturn);
  investor.firstName = firstName;
  investor.deposit = deposit;
  return investor;
}

let investor1 = createInvestor('John', 100);
let investor2 = createInvestor('Jane', 250);

console.log(investor1.getAccountResult()); // Output: "Firstname:John, Return amount: 102, Deposit amount: 100"
console.log(investor2.getAccountResult()); // Output: "Firstname:Jane, Return amount: 255, Deposit amount: 250"
