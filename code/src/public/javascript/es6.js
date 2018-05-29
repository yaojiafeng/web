export default function () {
    var promise = new Promise(function (resolve, reject) {
        console.log('1');
        //resolve();
        reject();
    });
    promise.then(function (value) {
        console.log('sessess');
    }, function (err) {
        console.log('err')
    })
}
export class Person {
    constructor() {

    }
    getName() {
        console.log(' use class');
    }
}