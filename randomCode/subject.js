"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var subject$ = new rxjs_1.Subject();
subject$.subscribe({
    next: function (value) { console.log('subject1', value); },
    error: function (err) { console.log(err); }
});
subject$.subscribe({
    next: function (value) { console.log('subject2', value); },
    error: function (err) { console.log(err); }
});
subject$.next(5);
subject$.next(12);
subject$.error('Error');
subject$.next(50);
