import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
export function rxjsTest(){
range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x));
}
// var buttom = document.getElementById('app');
// Rx.Observable.fromEvent(buttom, 'click')
//     .subscribe(() => console.log('Clicked'))