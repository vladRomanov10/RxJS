import { BehaviorSubject, of, map } from 'rxjs'

//Объявление
let a: number = 5
let b: number = 10

let c = new BehaviorSubject(5)
let d = new BehaviorSubject(10)

//Чтение
console.log(a)

console.log(c.value)
console.log(d.getValue())

//Изменение
a = 7

c.next(7)
// Константы
const e: number = 5 
const f: number = 10

const g = new BehaviorSubject(5).asObservable() // метод .asObservable() делает данные - observable только читаемыми по подписке
const h = of(10) //функция of делает данные - observable только читаемыми по подписке

//Создание зависимости одних данных от других
//На чистом TS или JS это сложная конструкция, которую лучше не делать
//RxJS
const sourceData$ = new BehaviorSubject(5) //это subject - это сущность rxjs, для хранения данных, здесь можно данные хранить и изменять, типо let

const calculatedData$ = sourceData$.pipe( //это observable(поток) - это сущность rxjs, данные из которых можно только прочитать и то, только с помощью подписки
    map((value) => value *2)
)

//чтение данных из observable
calculatedData$.subscribe( //с помощью метода subscribe, куда вставляем колбэк, читаем данные
    value => {
        console.log(value) // получим 10 (5 * 2)
    }
);