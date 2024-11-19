import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbinxx.org/delay/1';

const handleError = (err: AjaxError) => {
	console.warn('error:', err);
	return of({
        ok:false,
        users:[]
    });
};

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(handleError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(handleError)
// );


const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);


// obs2$.subscribe((data) => console.log('ajax:', data));
obs$.pipe(
    catchError(handleError)
)
.subscribe({
    next: val => console.log('next:', val),
    error: err => console.warn('error:', err),
    complete: () => console.log('complete')
});
