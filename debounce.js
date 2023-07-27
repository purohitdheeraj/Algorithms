// debouncing

const debounce = (func, delay) => {
	let timerId;
	return () => {
		timerId = setTimeout(() => {
			func();
		}, delay);
	};
};

// e / 1000
const event1 = debounce(() => console.log("ram"), 200);
const event3 = debounce(() => console.log("krishna"), 300);
const event4 = debounce(
	() => console.log("RadheShyam"),
	1300
);

// event a 200
// event b 300
// event c 1000
event1();
event3();
event4();
