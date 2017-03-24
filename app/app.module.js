// import {NgModule} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {HelloWorldComponent} from 'hello.world.component';
var HelloWorld = (function () {
    function HelloWorld(test, text) {
        this.test = test;
        this.text = text;
    }
    return HelloWorld;
}());
var hw = new HelloWorld('Test', 'Hello World');
console.log(hw.text);
console.log(hw.test);
