// import util from './util1.js';
// import {
//     test
// } from './util1';
// util();
// test();
// import Rx from 'rxjs'
// import {
//     Observable
// } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
import {
    rxjsTest
} from './rxjs'

import promise, {
    Person
} from './es6';
import '../style/test.css';

promise();
rxjsTest();
var person = new Person();
person.getName();
var vm = new Vue({
    el: '#app',
    data: {
        title: 'hello',
        text: ''
    }
})







// with(this) {
//     return _c('div', {
//         staticClass: "js_content",
//         attrs: {
//             "id": "app"
//         }
//     }, [_v("\n            " + _s(title) + "\n            "), _c('input', {
//         directives: [{
//             name: "model",
//             rawName: "v-model",
//             value: (text),
//             expression: "text"
//         }],
//         domProps: {
//             "value": (text)
//         },
//         on: {
//             "input": function ($event) {
//                 if ($event.target.composing) return;
//                 text = $event.target.value
//             }
//         }
//     }), _v(" " + _s(text) + "\n        ")])
// }