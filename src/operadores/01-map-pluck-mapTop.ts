import { fromEvent, map, range } from 'rxjs';

// range(1, 5)
// 	.pipe(map<number, string>((value) => (value * 10).toString()))
// 	.subscribe(console.log);


const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyUp$.pipe(map(event => event.code));

const keyUpPluck$ = keyUp$.pipe( map(value => value?.code)); //Equivalente a pluck('code') porque pluck esta deprecated

keyUpCode$.subscribe(code => console.log('map', code));
keyUpPluck$.subscribe(code => console.log('pluck', code));