"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var asyncSubject$ = new rxjs_1.AsyncSubject();
asyncSubject$.next(12);
asyncSubject$.subscribe({
    next: function (value) { console.log(value); }
});
asyncSubject$.complete();
