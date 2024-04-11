import { Observable, filter } from "rxjs";

const observable$ = new Observable(observer => {
    observer.next(1)
    observer.next(3)
    setTimeout(() => observer.next(2), 2000)
})

observable$
    .pipe(
        filter(data => data !== 2)
    )
    .subscribe({
    next: (data) => {
        console.log(data)
    }
})