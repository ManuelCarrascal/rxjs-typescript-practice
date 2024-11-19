import { fromEvent, map, sampleTime } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
	.pipe(
        sampleTime(2000), //es un poco mas eficiente que el sampleTime este arriba por tema de operaciones
		map(({ x, y }) => ({ x, y })),
		//sampleTime(2000)
	)
	.subscribe(console.log);
