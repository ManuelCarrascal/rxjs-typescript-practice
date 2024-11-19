import { range, filter, from, fromEvent, map } from 'rxjs';

// range(1, 10).pipe(
// 	filter((val, i) => {
// 		console.log('index:', i);
// 		return val % 2 === 1;
// 	})
// );
//.subscribe(console.log);

interface Character {
	type: string;
	name: string;
}

const characters: Character[] = [
	{
		type: 'hero',
		name: 'Batman',
	},
	{
		type: 'hero',
		name: 'Superman',
	},
	{
		type: 'villain',
		name: 'Joker',
	},
	{
		type: 'villain',
		name: 'Lex Luthor',
	},
];

// from(characters).pipe(
//     filter((character) => character.type !== 'hero')
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
	map((event) => event.key),
    filter((key)=> key === 'Enter')
);
keyup$.subscribe(console.log);
