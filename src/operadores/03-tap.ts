import { map, range, tap } from 'rxjs';

const numbers$ = range(1, 5);
numbers$
	.pipe(
		tap((value) => {
			console.log('antes', value);
			return 100;
		}),
		map((value) => value * 10),
        tap({
            next: value => console.log('después', value),
            complete: () => console.log('Se terminó todo')
        })
	)
	.subscribe((value) => console.log('subs', value));
