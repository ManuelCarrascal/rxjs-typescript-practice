import { auditTime, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    map(({x, y}) => ({x, y})),
    tap((event) => console.log('tap', event)),
    auditTime(2000)
)
.subscribe(console.log);