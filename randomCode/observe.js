"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (observer) {
    setTimeout(function () { return observer.next(10); }, 1000);
    setTimeout(function () { return observer.next(20); }, 2000);
    setTimeout(function () { return observer.next(40); }, 3000);
});
var subscription = observable$.subscribe({
    next: function (value) { console.log(value * 2); },
    error: function (err) { console.log(err); },
    complete: function () { }
});
setTimeout(function () { return subscription.unsubscribe(); }, 2500);
