import { distinctUntilChanged, from, of } from 'rxjs';

const numbers$ = of(1, 1, 2, 3, 4, 3, 5, 6);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Character {
	name: string;
}

const characters: Character[] = [
	{ name: 'Megaman' },
	{ name: 'X' },
	{ name: 'Zero' },
	{ name: 'Megaman' },
	{ name: 'Megaman' },
	{ name: 'Zero' },
	{ name: 'X' },
];

from(characters)
	.pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
	.subscribe(console.log);
