import { throttleTime, distinctUntilChanged, fromEvent, map, asyncScheduler } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');
click$.pipe(throttleTime(3000)).subscribe(console.log);

//Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
	.pipe(
		throttleTime(400, asyncScheduler, {
            leading: false,
            trailing: true
        }),
		map((event) => (event.target as HTMLInputElement).value),
		distinctUntilChanged()
	)
	.subscribe(console.log);
