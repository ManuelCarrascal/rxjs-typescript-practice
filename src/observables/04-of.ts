import { of } from 'rxjs';

const observer = {
	next: (value) => console.log('next:', value),
	error: (error) => console.warn('error:', error),
	complete: () => console.info('complete'),
};

const obs$ = of(...[1, 2, 3, 4, 5, 6], 1, 2, 3, 4);

obs$.subscribe(observer);
