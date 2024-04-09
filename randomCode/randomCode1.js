"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//Объявление
var a = 5;
var b = 10;
var c = new rxjs_1.BehaviorSubject(5);
var d = new rxjs_1.BehaviorSubject(10);
//Чтение
console.log(a);
console.log(c.value);
console.log(d.getValue());
//Изменение
a = 7;
c.next(7);
// Константы
var e = 5;
var f = 10;
var g = new rxjs_1.BehaviorSubject(5).asObservable;
var h = new rxjs_1.BehaviorSubject(10).asObservable;
