class PubSub {
	constructor() {
		this.subscribers = {};
		this.published = {};
	}

	subscribe(eventName, callback) {
		if (!Array.isArray(this.subscribers[eventName])) {
			// creating a channel for eventName
			// if not exist
			this.subscribers[eventName] = [];
		}

		// this will add the callback into evenName Channel
		this.subscribers[eventName].push(callback);
	}

	publish(eventName, data) {
		// if event does not exist then do nothing
		if (!this.subscribers[eventName]) {
			return;
		}

		// if exist in subscribers then call the callback & pass the data
		this.subscribers[eventName].forEach((callback) => {
			callback(data);

			if (!Array.isArray(this.published[eventName])) {
				this.published[eventName] = [];
			}

			this.published[eventName].push(callback);
		});
	}

	unsubscribe(eventName, callback) {
		// remove the specific callback from the events channel

		if (Array.isArray(this.subscribers[eventName])) {
			this.subscribers[eventName] = this.subscribers[
				eventName
			].filter((cb) => cb !== callback);
		}
	}
}

const pubSub = new PubSub();

const cb1 = (data) => console.log("event 1", data);
const cb2 = (data) => console.log("event 2", data);

pubSub.subscribe("click", cb1);
pubSub.subscribe("click", cb1);
pubSub.subscribe("click", cb2);
pubSub.subscribe("click", cb2);

// pubSub.unsubscribe('click', cb2)

pubSub.publish('click', "hare krishna")

console.log(pubSub.subscribers);
console.log(pubSub.published);
