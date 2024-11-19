import { asyncScheduler, range } from 'rxjs';

import { observeOn } from 'rxjs/operators';

const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('before subscribe');
src$.subscribe(console.log);
console.log('after subscribe');
