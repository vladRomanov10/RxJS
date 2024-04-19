import {AsyncSubject } from 'rxjs'

const asyncSubject$ = new AsyncSubject()


asyncSubject$.next(12)


asyncSubject$.subscribe({
    next: (value) => {console.log(value)}
})

asyncSubject$.complete()
