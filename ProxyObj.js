// Override a protected object and use create a handler to add a customized logic.

const ProtectedObj = {
	firstName: "Amen",
  lastName: "Santo",
	grade: 10,  
}

const Handler = {
	get: (target, property) => {
  	if(property.includes("_")) {
    	return property
      	.split("_")
        .map(prop => `${prop}: ${target[prop]}`)
        .join("\n")
    }
    return target[property]
  },
}

const ProxyProtectedObj = new Proxy(ProtectedObj, Handler);
console.log(ProxyProtectedObj.firstName_lastName_grade); // Output: "firstName: Amen, lastName: Santo, grade: 10"
