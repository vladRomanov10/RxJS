import { BehaviorSubject, of } from 'rxjs'

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

const g = new BehaviorSubject(5).asObservable() 
const h = of(10)