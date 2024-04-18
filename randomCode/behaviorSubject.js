"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var behaviorSubject$ = new rxjs_1.BehaviorSubject(1);
var subscriber1 = behaviorSubject$.subscribe({
    next: function (value) { console.log('First subscribe', value); }
});
behaviorSubject$.next(12);
console.log('behaviorSubject$  value', behaviorSubject$.getValue());
var subscriber2 = behaviorSubject$.subscribe({
    next: function (value) { console.log('Second subscribe', value); }
});
