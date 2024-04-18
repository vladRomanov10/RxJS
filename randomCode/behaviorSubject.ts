import { BehaviorSubject, Subject } from 'rxjs'

const behaviorSubject$ = new BehaviorSubject(1)

const subscriber1 = behaviorSubject$.subscribe({
    next: (value) => {console.log('First subscribe', value)}
})

behaviorSubject$.next(12)

console.log('behaviorSubject$  value', behaviorSubject$.getValue())

const subscriber2 = behaviorSubject$.subscribe({
    next: (value) => {console.log('Second subscribe', value)}
})
