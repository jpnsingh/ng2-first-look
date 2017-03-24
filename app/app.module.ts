// import {NgModule} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';

// import {HelloWorldComponent} from 'hello.world.component';

class HelloWorld {
    constructor(public test, public text) {
    }
}

var hw = new HelloWorld('Test', 'Hello World');
console.log(hw.text);
console.log(hw.test);
