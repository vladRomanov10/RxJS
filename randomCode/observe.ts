import { Observable } from 'rxjs'

const observable$ = new Observable(observer => {
    setTimeout(() => observer.next(10), 1000)
    setTimeout(() => observer.next(20), 2000)
    setTimeout(() => observer.next(40), 3000)
})

const subscription = observable$.subscribe({
    next: (value: number): void => {console.log(value * 2)},
    error: (err) => {console.log(err)},
    complete: () => {}
})

setTimeout(() => subscription.unsubscribe(), 2500)
