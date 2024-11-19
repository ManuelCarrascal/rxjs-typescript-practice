import { from, map, scan, take } from 'rxjs';

const numbers = [1, 2, 3, 4, 5];

const totalAccumulator = (accumulator, currentValue) =>
	accumulator + currentValue;

from(numbers)
	.pipe(take(5), scan(totalAccumulator, 0))
	.subscribe({
		next: (val) => console.log(val),
		complete: () => console.log('Complete'),
	});

//Redux
interface User {
	id?: string;
	name?: string;
	authenticate?: boolean;
	token?: string;
	age?: number;
}

const user: User[] = [
	{
		id: 'mna',
		authenticate: false,
		token: null,
	},
	{
		id: 'mna',
		authenticate: true,
		token: 'ABC',
	},
	{
		id: 'mna',
		authenticate: true,
		token: 'ABC123',
	},
];

const state$ = from(user).pipe(
	scan<User, User>(
		(accumulator, currentValue) => {
			return { ...accumulator, ...currentValue };
		},
		{ age: 33 }
	)
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
