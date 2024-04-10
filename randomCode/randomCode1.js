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
var g = new rxjs_1.BehaviorSubject(5).asObservable(); // метод .asObservable() делает данные (observable) только читаемыми по подписке
var h = (0, rxjs_1.of)(10); //функция of делает данные (observable) только читаемыми по подписке
//Создание зависимости одних данных от других
//На чистом TS или JS это сложная конструкция, которую лучше не делать
//RxJS
var sourceData$ = new rxjs_1.BehaviorSubject(5); //это subject - это сущность rxjs, для хранения данных, здесь можно данные хранить и изменять, типо let
var calculatedData$ = sourceData$.pipe(//это observable(поток) - это сущность rxjs, данные из которых можно только прочитать и то, только с помощью подписки
(0, rxjs_1.map)(function (value) { return value * 2; }));
//чтение данных из observable
calculatedData$.subscribe(//с помощью метода subscribe, куда вставляем колбэк, читаем данные
function (//с помощью метода subscribe, куда вставляем колбэк, читаем данные
value) {
    console.log(value); // получим 10 (5 * 2)
});
