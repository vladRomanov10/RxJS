"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (observer) {
    observer.next(1);
    observer.next(3);
    setTimeout(function () { return observer.next(2); }, 2000);
});
observable$
    .pipe((0, rxjs_1.filter)(function (data) { return data !== 2; }))
    .subscribe({
    next: function (data) {
        console.log(data);
    }
});
