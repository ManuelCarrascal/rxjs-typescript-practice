import { distinctUntilKeyChanged, from } from 'rxjs';

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

from(characters).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);
