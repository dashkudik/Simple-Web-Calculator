//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////*КЛАССЫ*/////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
class Number_ { // КЛАСС ЧИСЛО
	negative; // поле, содержащие информацию о знаке числа
	int; // (...) целое ли число
	value; // (...) само значение 
	constructor() {
		this.negative = false;
		this.int = true;
		this.value = '';
	}
	addDigit(which) { // метод добавления чего-либо к значению числа
		if (which == '.') {
			if (!dotWasWritten(this.value) || empty(this.value)) {
				this.value += which;
			}
		}
		else {
			this.value += which;
		}
	}
	deleteNumber() { // метод "очистки"" значения
		this.value = '';
	}
	empty() { // метод, содержащий информацию о том, пустое ли значение числа
		return this.value = '';
	}
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
class oneArgOper { // КЛАСС ОДНОПАРАМЕТРОВЫЕ ОПЕРАЦИИ
	static x1Oper() { // 1/x
		if (!block1Oper) {
			event = 0;
			letOneTime = true;
			count();
		}
	}
	static sqrtOper() { // определяет, что в функции вычисления (count) будет считаться корень квадратный
		if (!block1Oper) {
			event = 1;
			letOneTime = true;
			count();
		}
	}
	static x2Oper() { // (...) возведение в квадрат
		if (!block1Oper) {
			event = 2;
			letOneTime = true;
			count();
		}
	}
	static facOper() { // (...) факториал
		if (!block1Oper) {
			event = 13;
			letOneTime = true;
			count();
		}
	}
	static sinOper() { // (...) синус
		if (!block1Oper) {
			event = 3;
			letOneTime = true;
			count();
		}
	}
	static cosOper() { // (...) косинус
		if (!block1Oper) {
			event = 4;
			letOneTime = true;
			count();
		}
	}
	static tgOper() { // (...) тангенс
		if (!block1Oper) {
			event = 11;
			letOneTime = true;
			count();
		}
	}
	static ctgOper() { // (...) котангенс
		if (!block1Oper) {
			event = 12;
			letOneTime = true;
			count();
		}
	}
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
class twoArgsOper { // КЛАСС ДВУХПАРАМЕТРОВЫЕ ОПЕРАЦИИ
	static readyToGetArg = false; // статическое поле, хранящее информацию о том, нужно ли предоставить
	// возможность пользователю вводить второй аргумент (num2)
	static logOper() { // определяет, что в функции вычисления (count) будет считаться логарифм
		if (!block2Oper) {
			event = 5; // идентификатор 
			letOneTime = true;
			twoArgsOper.readyToGetArg = true; // предстоит вводить второй аргумент
			_block1(); // при этом выполнять однопараметровые операции уже нельзя
			showWindow.flash('blue'); // подсветить синим
			_blockEq(); // запретить нажимать равно в этот момент, ведь второй арг. еще не начал вводиться
		}
	}
	static yxOper() { // (...)
		if (!block2Oper) {
			event = 6;
			letOneTime = true;
			twoArgsOper.readyToGetArg = true;
			_block1();
			showWindow.flash('blue');
			_blockEq();
		}
	}
	static divideOper() { // (...)
		if (!block2Oper) {
			event = 7;
			letOneTime = true;
			twoArgsOper.readyToGetArg = true;
			_block1();
			showWindow.flash('blue');
			_blockEq();
		}
	}
	static mltOper() { // (...)
		if (!block2Oper) {
			event = 8;
			letOneTime = true;
			twoArgsOper.readyToGetArg = true;
			_block1();
			showWindow.flash('blue');
			_blockEq();
		}
	}
	static plusOper() { // (...)
		if (!block2Oper) {
			event = 10;
			letOneTime = true;
			twoArgsOper.readyToGetArg = true;
			_block1();
			showWindow.flash('blue');
			_blockEq();
		}
	}
	static minusOper() { // (...)
		event = 9;
		letOneTime = true;
		twoArgsOper.readyToGetArg = true;
		_block1();
		showWindow.flash('blue');
		_blockEq();
	}	
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
class operations { // класс вычислений
	static ctg() {
		if (Number(num1.value) % 180 == 0) {
				num1.value = 'Infinity';
				deleteAll = true;
	  		}
			else
				if (Number(num1.value) % 90 == 0) {
					num1.value = '0';
				}
					else {
						let rad = Number(num1.value) * Math.PI/180
						if (!fourNulls(String((1.0000/Math.tan(rad)).toFixed(4)))) {
							num1.value = String((1.0000/Math.tan(rad)).toFixed(4));
						}
						else {
							num1.value = String((1.0000/Math.tan(rad)).toFixed(0));
						}
	  				}
	  	removeExtraNulls(num1);
	  	showWindow.show(num1.value);
	}
	static tg() {
		if (Number(num1.value) % 180 == 0) {
				num1.value = '0';
	  		}
			else
				if (Number(num1.value) % 90 == 0) {
					num1.value = 'Infinity';
					deleteAll = true;
				}
					else {
							let rad = Number(num1.value) * Math.PI/180;
							if (!fourNulls(String(Math.tan(rad).toFixed(4)))) {
								num1.value = String(Math.tan(rad).toFixed(4));			
							}
							else {
								num1.value = String(Math.tan(rad).toFixed(0));
							}
		}
		removeExtraNulls(num1);
		showWindow.show(num1.value);
	}
	static cos() {
		let rad = Number(num1.value) * Math.PI/180;
		if (!fourNulls(String(Math.cos(rad).toFixed(4)))) {
			num1.value = String(Math.cos(rad).toFixed(4));
		}
		else {
			num1.value = String(Math.cos(rad).toFixed(0));
		}
		removeExtraNulls(num1);
		showWindow.show(num1.value);
	}
	static sin() {
		let rad = Number(num1.value) * Math.PI/180;
		if (!fourNulls(String(Math.sin(rad).toFixed(4)))) {
			num1.value = String(Math.sin(rad).toFixed(4));
		}
		else {
			num1.value = String(Math.sin(rad).toFixed(0));
		}
		removeExtraNulls(num1);
		showWindow.show(num1.value);
	}
	static x2() {
		num1.value = String((Number(num1.value) * Number(num1.value)).toFixed(4));
		if (num1.value.length > 13) {
			num1.value = 'Error';
			deleteAll = true;
			showWindow.flash('red');
		} else {
			if (!fourNulls(String(Number(num1.value).toFixed(4)))){
				num1.value = String((Number(num1.value).toFixed(4)));
			}
			else {
				num1.value = String(Number(num1.value).toFixed(0));
			}
		}
		removeExtraNulls(num1);
		showWindow.show(num1.value);
	}
	static sqrt() {
		if (Number(num1.value) < 0) {
			num1.value = 'Error';
			deleteAll = true;
			showWindow.flash('red');
		}
		else {
			if (!fourNulls(String((Math.sqrt(Number(num1.value)).toFixed(4))))) {
				num1.value = String((Math.sqrt(Number(num1.value)).toFixed(4)))
			}
			else {
				num1.value = String((Math.sqrt(Number(num1.value)).toFixed(0)))
			}
		}
		removeExtraNulls(num1);
		showWindow.show(num1.value);
	}
	static x1() {
		num1.value = String(Number(1/Number(num1.value)).toFixed(4));
		removeExtraNulls(num1);
		showWindow.show(num1.value);
	}
	static fac() {
		if (!num1.int) {
			num1.value = 'Error';
			showWindow.flash('red');
			deleteAll = true;
		}
		else {
			if (num1.value.length <= 2 && !num1.negative) {
				if (String(fac(num1.value)).length <= 9) {
					num1.value = String(fac(num1.value));
				}
				else {
					num1.value = 'Error';
					showWindow.flash('red');
					deleteAll = true;
				}
			}
			else {
				num1.value = 'Error';
				showWindow.flash('red');
				deleteAll = true;
			}
		}
		showWindow.show(num1.value);
	}
	static delta() {
		if (!fourNulls(String((Number(num1.value) - Number(num2.value)).toFixed(4)))) {
			num1.value = String((Number(num1.value) - Number(num2.value)).toFixed(4));
		}
		else {
			num1.value = String(Number(num1.value) - Number(num2.value));
		}
		removeExtraNulls(num1);
		num2.deleteNumber();
		showWindow.show(num1.value);
	}
	static amount() {
		if (!fourNulls(String((Number(num1.value) - (-1)*Number(num2.value)).toFixed(4)))) {
			num1.value = String((Number(num1.value) - (-1)*Number(num2.value)).toFixed(4));
		}
		else {
			num1.value = String((Number(num1.value) - (-1)*Number(num2.value)));
		}
		removeExtraNulls(num1);
		num2.deleteNumber();
		showWindow.show(num1.value);
	}
	static multi() {
		if (String((Number(num1.value) * Number(num2.value)).toFixed(4)).length <= 13) { 
			if (!fourNulls(String((Number(num1.value) * Number(num2.value)).toFixed(4)))) {
					num1.value = String((Number(num1.value) * Number(num2.value)).toFixed(4));
				}
				else {
					num1.value = String((Number(num1.value) * Number(num2.value)));
				}
		}
		else {
			num1.value = 'Error';
			deleteAll = true;
			showWindow.flash('red');
		}
			removeExtraNulls(num1);
			num2.deleteNumber();
			showWindow.show(num1.value);
	}
	static divide() {
		if (Number(num2.value) != 0) {
			if (!fourNulls(String((Number(num1.value) / Number(num2.value)).toFixed(4)))) {
				num1.value = String((Number(num1.value) / Number(num2.value)).toFixed(4));
			}
			else {
				num1.value = String((Number(num1.value) / Number(num2.value)));
			}
		}
		else {
			num1.value = 'Infinity';
		}
		removeExtraNulls(num1);
		num2.deleteNumber();
		showWindow.show(num1.value);
	}
	static yx() {
		if (num1.value != 'Infinity') {
			if (Number(num1.value) > 2 && Number(num2.value) > 16) {
				num1.value = 'Error';
				deleteAll = true;
				showWindow.flash('red');
			}
			else {
				if (String(Math.pow(Number(num1.value), Number(num2.value)).toFixed(4)).length <= 13) {
					if (!fourNulls(String(Math.pow(Number(num1.value), Number(num2.value)).toFixed(4)))) {
						num1.value = String(Math.pow(Number(num1.value), Number(num2.value)).toFixed(4));
					}
					else {
						num1.value = String(Math.pow(Number(num1.value), Number(num2.value)));
					}
				}
				else {
					num1.value = 'Error';
					deleteAll = true;
					showWindow.flash('red');
				}
			}
		}
		else {
			if (Number(num2.value) == 1) {
				num1.value = 'Indeterminacy';
			}
		}
		removeExtraNulls(num1);
		num2.deleteNumber();
		showWindow.show(num1.value);
	}
	static log() {
		if (Number(num1.value) <= 0 || Number(num2.value) <= 0 || Number(num2.value) == 1) {
			num1.value = 'Error';
			deleteAll = true;
			showWindow.flash('red');
		}
		else {
			if (!fourNulls(String((Math.log(Number(num1.value)) / Math.log(Number(num2.value))).toFixed(4)))){
				num1.value = String((Math.log(Number(num1.value)) / Math.log(Number(num2.value))).toFixed(4));
			}
			else {
				num1.value = String((Math.log(Number(num1.value)) / Math.log(Number(num2.value))).toFixed(0));
			}
		}
		removeExtraNulls(num1);
		num2.deleteNumber();
		showWindow.show(num1.value);
	}
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
class showWindow { // КЛАСС ТАБЛО
	static _empty = true; // статическое поле, определяющее пусто ли в табло
	static show(what) { // метод вывода на табло
		$('#show').val(what);
		showWindow._empty = false;
	}
	static flash(colour) { // подсветка
		$('#show').css({border:"4px solid " + colour });
	}
	static noFlash() { // подсветка при
		if (twoArgsOper.readyToGetArg) {
			showWindow.flash('blue');
		}
		else {
			showWindow.flash('orange');
		}
	}
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ /////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
let blockDot = false; // блокировка нажатия точки
let block1Oper = false; // -//- одноарг. операций
let block2Oper = false; // -//- двухарг. операций
let blockEq = true; // -//- нажатия "равно"
let blockMinus = false; // -//- блокировка нажатия минуса
let resultWasGot = false; // логическая переменная, хранящая информацию о том, был ли получен результат
let num1 = new Number_(); // основной аргумент
let num2 = new Number_(); // вторичный аргумент, используется только в выполнении двухарг. операций ( +, - и т.п)
let deleteAll = false; // логическая переменная, хранящая информацию о том, нужно ли удалить всё содержимое в табло после нажатия С
let minus_ = false;
let letOneTime = true; // логическая переменная, использующаяся для того, чтобы запретить повторное нажатие на определенные кнопки
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////// ВВОД С КЛАВИАТУРЫ /////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
jQuery('document').ready(function() {
	$('body').keydown(function(eventObject) {
		if (eventObject.which >= 48 && eventObject.which <= 57) {
			choiceAndAppend(String(Number(eventObject.which) - 48));
		}
		switch (eventObject.which) {
			case 106: { 
				twoArgsOper.mltOper();
				break;
			}
			case 107: {
				twoArgsOper.plusOper();
				break;
			}
			case 109: {
				minusEvent();
				break;
			}
			case 111: {
				twoArgsOper.divideOper();
				break;
			}
			case 187: {
				count();
				break;
			}
			case 188: {
				choiceAndAppend('.');
				break;
			}
			case 190: {
				choiceAndAppend('.');
				break;
			}
			case 8: {
				popBack(choice());
				break;
			}
			case 13: {
				count();
				break;
			}
		}
	})
})
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////// ВВОД С МЫШКИ //////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
jQuery('document').ready(function() {
	$('#n1').click(function() {
		choiceAndAppend('1');
	})
})
jQuery('document').ready(function() {
	$('#n2').click(function() {
		choiceAndAppend('2');
	})
})
jQuery('document').ready(function() {
	$('#n3').click(function() {
		choiceAndAppend('3');
	})
})
jQuery('document').ready(function() {
	$('#n4').click(function() {
		choiceAndAppend('4');
	})
})
jQuery('document').ready(function() {
	$('#n5').click(function() {
		choiceAndAppend('5');
	})
})
jQuery('document').ready(function() {
	$('#n6').click(function() {
		choiceAndAppend('6');
	})
})
jQuery('document').ready(function() {
	$('#n7').click(function() {
		choiceAndAppend('7');
	})
})
jQuery('document').ready(function() {
	$('#n8').click(function() {
		choiceAndAppend('8');
	})
})
jQuery('document').ready(function() {
	$('#n9').click(function() {
		choiceAndAppend('9');
	})
})
jQuery('document').ready(function() {
	$('#n0').click(function() {
		choiceAndAppend('0');
	})
})
jQuery('document').ready(function() {
	$('#ne').click(function() {
		let currentObj = choice();
		if (empty(currentObj.value)) {
			currentObj.value = String(Math.exp(1).toFixed(6));
			showWindow.show(currentObj.value);
			_unblockEq();
		}
	})
})
jQuery('document').ready(function() {
	$('#dot').click(function() {
		if (!blockDot) {
			choiceAndAppend('.');
		}
	})
})
jQuery('document').ready(function() {
	$('#C').click(function() {
		popBack(choice());
	})
})
jQuery('document').ready(function() {
	$('#plus').click(function() {
		twoArgsOper.plusOper();
	})
})
jQuery('document').ready(function() {
	$('#minus').click(function() {
		minusEvent();
	})
})
jQuery('document').ready(function() {
	$('#mlt').click(function() {
		twoArgsOper.mltOper();
	})
})
jQuery('document').ready(function() {
	$('#divide').click(function() {
		twoArgsOper.divideOper();	
	})
})
jQuery('document').ready(function() {
	$('#yx').click(function() {
		twoArgsOper.yxOper();
	})
})
jQuery('document').ready(function() {
	$('#log').click(function() {
		twoArgsOper.logOper();
	})
})
jQuery('document').ready(function() {
	$('#x1').click(function() {
		oneArgOper.x1Oper();
	})
})
jQuery('document').ready(function() {
	$('#sqrt').click(function() {
		oneArgOper.sqrtOper();
	})
})
jQuery('document').ready(function() {
	$('#pow2').click(function() {
		oneArgOper.x2Oper();
	})
})
jQuery('document').ready(function() {
	$('#factorial').click(function() {
		oneArgOper.facOper();		
	})
})
jQuery('document').ready(function() {
	$('#sin').click(function() {
		oneArgOper.sinOper();
	})
})
jQuery('document').ready(function() {
	$('#cos').click(function() {
		oneArgOper.cosOper();
	})
})
jQuery('document').ready(function() {
	$('#tg').click(function() {
		oneArgOper.tgOper();
	})
})
jQuery('document').ready(function() {
	$('#ctg').click(function() {
		oneArgOper.ctgOper();
	})
})
jQuery('document').ready(function() {
	$('#eq').click(function() {
		if (!blockEq) {
			count();
		}
	})
})
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////// ОБРАБОТКА МЕНЮ ////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
jQuery('document').ready(function() {
	$('#menured').click(function() {
		$('#main').css({backgroundColor: 'red'});
	})
})
//
jQuery('document').ready(function() {
	$('#menublue').click(function() {
		$('#main').css({backgroundColor: 'blue'});
	})
})
//
jQuery('document').ready(function() {
	$('#menugreen').click(function() {
		$('#main').css({backgroundColor: 'green'});
	})
})
//
jQuery('document').ready(function() {
	$('#menuyellow').click(function() {
		$('#main').css({backgroundColor: 'yellow'});
	})
})
//
jQuery('document').ready(function() {
	$('#_menured').click(function() {
		$('body').css({backgroundColor: 'red'});
	})
})
//
jQuery('document').ready(function() {
	$('#_menublue').click(function() {
		$('body').css({backgroundColor: 'blue'});
	})
})
//
jQuery('document').ready(function() {
	$('#_menugreen').click(function() {
		$('body').css({backgroundColor: 'green'});
	})
})
//
jQuery('document').ready(function() {
	$('#_menuyellow').click(function() {
		$('body').css({backgroundColor: 'yellow'});
	})
})
//
//
//
//
jQuery('document').ready(function() {
	$('#menured').hover(function() {hoverLi('red','menu');}, function() {unhoverLi('red','menu');});
})
//
jQuery('document').ready(function() {
	$('#menublue').hover(function() {hoverLi('blue','menu');}, function() {unhoverLi('blue','menu');});
})
//
jQuery('document').ready(function() {
	$('#menugreen').hover(function() {hoverLi('green','menu');}, function() {unhoverLi('green','menu');});
})
//
jQuery('document').ready(function() {
	$('#menuyellow').hover(function() {hoverLi('yellow','menu');}, function() {unhoverLi('yellow','menu');});
})
//
jQuery('document').ready(function() {
	$('#_menured').hover(function() {hoverLi('red','_menu');}, function() {unhoverLi('red','_menu')});
})
//
jQuery('document').ready(function() {
	$('#_menublue').hover(function() {hoverLi('blue','_menu');}, function() {unhoverLi('blue','_menu')});
})
//
jQuery('document').ready(function() {
	$('#_menugreen').hover(function() {hoverLi('green','_menu');}, function() {unhoverLi('green','_menu')});
})
//
jQuery('document').ready(function() {
	$('#_menuyellow').hover(function() {hoverLi('yellow','_menu');}, function() {unhoverLi('yellow','_menu')});
})
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////// ФУНКЦИИ ///////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function isNeg() {
	if (num1.value[0] == '-') {
		num1.negative = true;
	}
	else {
		num1.negative = false;
	}
}
//
function minusEvent() {
	if (!blockMinus) {
			if (showWindow._empty && !twoArgsOper.readyToGetArg) {
				num1.addDigit('-');
				num1.negative = true;
				blockAllexceptMinus();
				showWindow.show(num1.value);
				showWindow.flash('orange');
				minus_ = true;
				return;
			}
			if (twoArgsOper.readyToGetArg) {
				if (num2.value.length != 0) return;
				num2.addDigit('-');
				num2.negative = true;
				blockAll();
				showWindow.show(num2.value);
				showWindow.flash('orange');
				return;
			}
			twoArgsOper.minusOper();
		}
}
//
//
//
//
function unblockAll() {
	block1Oper = false;
	block2Oper = false;
	blockEq = false;
	blockMinus = false;
	blockDot = false;
}
//
function unblockAllexceptMinus() {
	block1Oper = false;
	block2Oper = false;
	blockEq = false;
	blockDot = false;
}
//
function _unblockDot() {
	blockDot = false;
}
//
function _unblockEq() {
	blockEq = false;
}
//
function _block1() {
	block1Oper = true;
}
//
function _block2() {
	block2Oper = true;
}
//
function _blockEq() {
	blockEq = true;
}
//
function _blockMinus() {
	blockMinus = true;
}
//
function _unblock2() {
	block2Oper = false;
}
//
function _blockDot() {
	blockDot = true;
}
//
function blockAll() {
	_block1();
	_block2();
	_blockEq();
	_blockMinus();
	_blockDot();
}
//
function blockAllexceptMinus() {
	_block1();
	_block2();
	_blockEq();
	_blockDot();
}
//
//
//
//
function hoverLi(colour, whichMenu) {
	$('#' + whichMenu + colour).css({backgroundColor: colour});
}
//
function unhoverLi(colour, whichMenu) {
	$('#' + whichMenu + colour).css({backgroundColor: '#64E4FF'});
}
//
//
//
//
function popBack(obj) {
	if (resultWasGot) {
		twoArgsOper.readyToGetArg = false;
		resultWasGot = false;
	}
	if (!deleteAll) {
		let keep = '';
		if (obj.value.charAt(obj.value.length - 1) == '.') {
			obj.int = true;
		}
		if (obj.value.length == 1) {
			obj.deleteNumber();
			showWindow._empty = true;
			showWindow.noFlash();
		}
		else {
			for (let i = 0; i < obj.value.length - 1; i++) {
				keep += obj.value.charAt(i);
			}
			obj.value = keep;
		}	
	}
	else {
		obj.deleteNumber();
		deleteAll = false;
		showWindow._empty = true;
		showWindow.noFlash();
	}
	showWindow.show(obj.value);
}
//
//
//
//
function choice() {
	if (twoArgsOper.readyToGetArg) {
		return num2;
	}
	return num1;
}
//
function choiceAndAppend(digit) {
	if (digit == '.') {
		if (!dotWasWritten(choice().value) && !empty(choice().value)) {
			choice().addDigit(digit);
			choice().int = false;
			showWindow.show(choice().value);
		}
	}
	else {
		if (choice().value.length <= 8) {
			if (twoArgsOper.readyToGetArg) {
				num2.addDigit(digit);
				showWindow.show(num2.value);
				_block2();
				_block1();
			}
			else {
				num1.addDigit(digit);
				showWindow.show(num1.value);
				_unblock2();
				if (minus_) {
					block1Oper = false;
				}
			}
			showWindow._empty = false;
			showWindow.flash('orange');
		}
	}
	_unblockEq();
	_unblockDot();
}
//
//
//
//
function fac(val) {
    if(val < 0) 
        return 0;
    if (val == 0) 
        return 1; 
    else 
        return val * fac(val - 1);
}
//
function isIn(ch, str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] == ch) return true;
	}
	return false;
}
//
function dotWasWritten(str) {
	return isIn('.', str);
}
//
function removeExtraNulls(obj) {
	if (dotWasWritten(obj.value)) {
		i = obj.value.length - 1;
		while (obj.value[i] == '0') {
			popBack(obj);
			i--;
		}
	}
}
//
function empty(str) {
	return str.length == 0;
}
//
function fourNulls(str){
	return str[str.length - 1] == '0' && str[str.length - 2] == '0' && str[str.length - 3] == '0' 
	&& str[str.length - 4] == '0'
}
//
function count() {
	if (letOneTime) {
		twoArgsOper.readyToGetArg = false;
		unblockAll();
		switch(event) {
				case 0: {operations.x1(); resultWasGot = true; break;}
				case 1: {operations.sqrt(); resultWasGot = true; break;}
				case 2: {operations.x2(); resultWasGot = true; break;}
				case 3: {operations.sin(); resultWasGot = true; break;}
				case 4: {operations.cos(); resultWasGot = true; break;}
				case 5: {operations.log(); resultWasGot = true; break;}
				case 6: {operations.yx(); resultWasGot = true; break;}
				case 7: {operations.divide(); resultWasGot = true; break;}
				case 8: {operations.multi(); resultWasGot = true; break;}
				case 9: {operations.delta(); resultWasGot = true; break;}
				case 10: {operations.amount(); resultWasGot = true; break;}
				case 11: {operations.tg(); resultWasGot = true; break;}
				case 12: {operations.ctg(); resultWasGot = true; break;}
				case 13: {operations.fac(); resultWasGot = true; break;}
			}
		letOneTime = false;
		isNeg();
	}
}
