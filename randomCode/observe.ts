import { Observable } from 'rxjs'

const observable$ = new Observable(observer => {
    observer.next(10)
    observer.error('error')
    observer.next(20)
    observer.next(30)
})

observable$.subscribe({
    next: (value: number): void => {console.log(value * 2)},
    error: (err) => {console.log(err)},
    complete: () => {}
})