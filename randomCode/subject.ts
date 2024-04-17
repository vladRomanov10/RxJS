import { Observable, Subject } from 'rxjs'

const subject$ = new Subject()

subject$.subscribe({
    next: (value) => {console.log('subject1', value)},
    error: (err) => {console.log(err)}
})

subject$.subscribe({
    next: (value) => {console.log('subject2', value)},
    error: (err) => {console.log(err)}
})

subject$.next(5)


subject$.next(12)

subject$.error('Error')

subject$.next(50)

