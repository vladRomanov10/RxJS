import { Observable } from 'rxjs'

const observable$ = new Observable(observer => {
    observer.next(10)
    observer.next(15)
    observer.next(20)
})

const subscription = observable$.subscribe((value) => {console.log(value)})

setTimeout(() => observable$.subscribe((value) => {console.log(`Second observable ${value}`)}), 1500)
//----
function getTitle() {
    return new Observable(observer => {

        setTimeout(() => {
            const response = {
                title: 'Title',
            }
            observer.next(response.title)
            observer.complete()
            }, 1000)
    })
}

getTitle().subscribe({
    next: (response) => console.log(`Server answer is ${response}`),
    error: (err) => console.log(err),
    complete: () => console.log('Stream is completed')
})