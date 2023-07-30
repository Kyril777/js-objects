/* JS Proxy pattern. */

const powerSupply = {
	product: "Apowking",
  wattage: 100,
  voltage: 110,
  batteryCapacity: 39600,
};

// Get original object and handler object.
const powerSupplyProxy = new Proxy(powerSupply, {
	set: (target, prop, value) => {
  	const prevValue = target[prop];
    console.log(prevValue);
    
    // target[prop] = value;
    Reflect.set(target, prop, value);
    },
  get: (target, prop) => {
		const value = target[prop];
		if (value === undefined) console.log("Info not found!");
    
    // Return value if found.
    return Reflect.get(target, prop);
  }
});

powerSupply.company = "Amazon";
console.log(powerSupply);
// Output: {   batteryCapacity: 39600, company: "Amazon", product: "Apowking", voltage: 110, wattage: 100 }

const batteryCapacity = powerSupplyProxy.batteryCapacity;
console.log(batteryCapacity); // Output: 39600

powerSupplyProxy.nonValue; // Output: "Info not found!"
