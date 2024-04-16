import { Observable } from 'rxjs'

const observable$ = new Observable(observer => {
    observer.next(10)
    observer.next(15)
    observer.next(20)
})

const subscription = observable$.subscribe((value) => {console.log(value)})

setTimeout(() => observable$.subscribe((value) => {console.log(`Second observable ${value}`)}), 1500)