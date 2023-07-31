/* Proxy pattern for a laptop object. */
const laptop = {
	item: "laptop",
  name: "Galaxy Chromebook",
  description: "256GB, 8GB RAM, Mercury Gray",
  price: 808.99
};

const laptopProxy = new Proxy(laptop, {
  get: (obj, prop) => {
    console.log(`The laptop ${prop} is ${obj[prop]}.`);
  },
  set: (obj, prop, value) => {
    console.log(`The laptop changed ${prop} from ${obj[prop]} to ${value}.`);
    obj[prop] = value;
    return true;
  }
});

laptopProxy.name; // Output: "The laptop name is Galaxy Chromebook."
laptopProxy.description; // Output: "The laptop description is 256GB, 8GB RAM, Mercury Gray."
laptopProxy.price=800; // Output: "The laptop changed price from 808.99 to 800."
