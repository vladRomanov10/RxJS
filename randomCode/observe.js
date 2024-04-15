"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (observer) {
    observer.next(10);
    observer.error('error');
    observer.next(20);
    observer.next(30);
});
observable$.subscribe({
    next: function (value) { console.log(value * 2); },
    error: function (err) { console.log(err); },
    complete: function () { }
});
