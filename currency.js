/* Another JS Proxy pattern. */
const currency = {
  currency1: "dollar",
  currency2: "euros",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "currency1") {
      return "USD";
    } 
    return Reflect.get(...arguments); 
  },
};

const proxy1 = new Proxy(currency, handler);

console.log(proxy1.currency1); // Output: "USD"
console.log(proxy1.currency2); // Output: "euros"
