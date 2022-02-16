/* bill.js */

export default class Bill {
	constructor() {
		this.amounts = [];
	}

	/** @param {string} amountStr */
	addAmount(amountStr) {
		// your code
		this.amounts.push(+amountStr)

	}

	// your code
	getCount() {
		return this.amounts.length
	}
	getTotal() {
		let sum = this.amounts.reduce(function (total, current) {
			return total + current
		}, 0)
		return sum
	}

	getAverage() {
		let sum = this.amounts.reduce(function (total, current) {
			return total + current
		}, 0)
		return sum / this.amounts.length
	}
}

console.log()

