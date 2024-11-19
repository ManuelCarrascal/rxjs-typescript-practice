import { catchError, map, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const takeError = (error: AjaxError) => {
	console.warn('error: ', error.message);
	return of([]);
};

ajax(url)
	.pipe(
		map((response) => response.response),
		catchError(takeError)
	)
	.subscribe((users) => console.log('users: ', users));
