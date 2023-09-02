class HashTable {
	constructor(size) {
		this.size = size;
		this.table = [];
	}

	get(key) {
		const index = this.hashFunc(key);
		const bucket = this.table[index];

		if (bucket) {
			// iterate the bucket
			// check for matching key
			for (let i = 0; i < bucket.length; i++) {
				if (bucket[i].key === key) {
					return bucket[i].value;
				}
			}
		}

		return undefined;
	}

	insert(key, value) {
		const index = this.hashFunc(key);

		// if bucket not present initialize
		if (!this.table[index]) {
			this.table[index] = [];
		}

		const currentValue = this.get(key);
		if (typeof currentValue !== "undefined") {
			const bucket = this.table[index];
			// update it
			for (let i = 0; i < bucket.length; i++) {
				if (bucket[i].key === key) {
					bucket[i].value = value;
				}
			}
		} else {
			// add it to bucket
			this.table[index].push({ key, value });
		}
	}

	remove(key) {
		const value = this.get(key);
		this.insert(key, undefined);

		return value;
	}

	hashFunc(key) {
		let hash = 0;

		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i)) % this.size;
		}

		return hash;
	}
}

const hashMap = new HashTable(10);

hashMap.insert("name", "dheeraj");
hashMap.insert("name", "abcd");
hashMap.insert("skilled", "dev");
hashMap.insert("covered", "dev");
hashMap.insert("skills", "reactjs");
hashMap.remove("skills");

console.log(hashMap.get("role"));
console.log(hashMap);
