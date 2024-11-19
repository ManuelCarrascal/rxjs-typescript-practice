import { first, fromEvent, map } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
	.pipe(
		// map(event => ({
		//     clientX: event.clientX,
		//     clientY: event.clientY
		// }))

		map(({ clientY, clientX }) => ({
			clientX,
			clientY,
		})),

		first(event => event.clientY >= 150)
	)
	.subscribe({
		next: (val) => console.log('next', val),
		complete: () => console.log('complete'),
	});
