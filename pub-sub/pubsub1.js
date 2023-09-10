class PubSub {
	constructor() {
		this.subscribers = {};
	}

	subscribe(eventName, callback) {
		// Initialize a channel if it doesn't exist yet
		if (!Array.isArray(this.subscribers[eventName])) {
			this.subscribers[eventName] = [];
		}

		// Add callback to the channel
		this.subscribers[eventName].push(callback);
	}

	publish(eventName, data) {
		// Return if no callbacks have been subscribed to an event
		if (!Array.isArray(this.subscribers[eventName])) {
			return;
		}

		// Execute all the callbacks subscribed to an event
		// Pass the callback the data from the event
		this.subscribers[eventName].forEach((callback) => {
			callback(data);
		});
	}

	unsubscribe(eventName, callback) {
		if (Array.isArray(this.subscribers[eventName])) {
			// Keeps all the callbacks that aren't equal to the one we unsubscribe
			this.subscribers[eventName] = this.subscribers[
				eventName
			].filter((cb) => cb !== callback);
		}
	}
}

const pubSub = new PubSub();

const logger = (data) => console.log(data);
const greeter = (name) => console.log(`Hello, ${name}!`);

pubSub.subscribe("error", logger);
pubSub.subscribe("click", logger);
pubSub.subscribe("keyup", logger);
pubSub.subscribe("keyup", greeter);

console.log(pubSub.subscribers);

pubSub.publish("error", { message: "error 1" });
pubSub.publish("error", { message: "error 2" });

pubSub.publish("click", { message: "clicked 1" });
pubSub.publish("click", { message: "clicked 2" });

pubSub.publish("keyup", "world");
pubSub.publish("keyup", "Skilled.dev");

pubSub.unsubscribe("keyup", logger);

console.log(pubSub.subscribers);

pubSub.publish("keyup", "friends");
