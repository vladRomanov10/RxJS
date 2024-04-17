"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable$ = new rxjs_1.Observable(function (observer) {
    observer.next(10);
    observer.next(15);
    observer.next(20);
});
var subscription = observable$.subscribe(function (value) { console.log(value); });
setTimeout(function () { return observable$.subscribe(function (value) { console.log("Second observable ".concat(value)); }); }, 1500);
//----
function getTitle() {
    return new rxjs_1.Observable(function (observer) {
        setTimeout(function () {
            var response = {
                title: 'Title',
            };
            observer.next(response.title);
            observer.complete();
        }, 1000);
    });
}
getTitle().subscribe({
    next: function (response) { return console.log("Server answer is ".concat(response)); },
    error: function (err) { return console.log(err); },
    complete: function () { return console.log('Stream is completed'); }
});
