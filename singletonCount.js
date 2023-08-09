/* The singleton pattern is to be instantiated only once. Prevent a duplicate instantiation by checking if the instantiate value already has a value. */
let instantiate;
let count = 0;
 
class Count {
  constructor() {
    if (instantiate) {
      throw new Error("Only one instance can be created!");
    }
    instantiate = this;
  }
 
  getInstance() {
    return this;
  }
 
  getCount() {
    return count;
  }
 
  increment() {
    return ++count;
  }
 
  decrement() {
    return --count;
  }
}
 
const singletonCount1 = Object.freeze(new Count());
const singletonCount2 = Object.freeze(new Count()); // Output: " Uncaught Error: Only one instance can be created! "
