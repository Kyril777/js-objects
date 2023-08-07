/* Observer pattern that sends report to management. */

// HTML: <button id="btn" onclick="sendData()">Send Reports</button>
class Observer {
	constructor(gn) {
  	this.observers = []
  }
  
  subscribe(gn) {
  	this.observers.push(gn);
  }
  
  unsubscribe(gn) {
  	this.observers = this.observers.filter((obj) => obj !== gn);
  }
  
  notify(data) {
  	this.observers.forEach((obj) => {
    	obj(data);
    });
  }  
}

const MyObserver = new Observer();

const sendToManager = (data) => console.log(`Hello Manager. Today's report: `, data);
const sendToSupervisor = (data) => console.log(`Hey Supervisor, Today's report`, data);

MyObserver.subscribe(sendToManager);
MyObserver.subscribe(sendToSupervisor);

const sendData = document.getElementById("btn");

sendData.addEventListener("click", () => {
	MyObserver.notify({ reportNumber: 37, details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...." });

/*
Output:
"Hello Manager. Today's report: ", {
  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  reportNumber: 37
}
"Hey Supervisor, Today's report", {
  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  reportNumber: 37
}
*/
                          
