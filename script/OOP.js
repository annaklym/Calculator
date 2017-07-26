'use strict';
class simpleCalc {
	constructor(op1, op2) {
		this._op1 = op1;
		this._op2 = op2;
		this._res = 0;
	}
	set A(newOp1) {
		if (!isNaN(newOp1)) {
			this._op1 = Number(newOp1);
		}
	}
	set B(newOp2) {
		if (!isNaN(newOp2)) {
			this._op2 = Number(newOp2);
		}
	}
	get res() {
		return this._res;
	}
	sum() {
		this._res = this._op1 + this._op2;
	}
	sub() {
		this._res = this._op1 - this._op2;
	}
}
class superCalc extends simpleCalc {
	mul() {
		this._res = this._op1 * this._op2;
	}
	div() {
		this._res = this._op1 / this._op2;
	}
}
let calc = new superCalc(3, 5);
calc.sum();
alert(calc.res);
calc.mul();
alert(calc.res);