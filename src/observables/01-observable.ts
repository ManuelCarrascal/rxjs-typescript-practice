import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
	next: (value: string) => console.log('next:', value),
	error: (error: unknown) => console.warn('error:', error),
	complete: () => console.info('Completado'),
};

const obs$ = new Observable<string>((subscriber) => {
	subscriber.next('Hola');
	subscriber.next('Mundo');

	subscriber.next('Hola');
	subscriber.next('Mundo');

	subscriber.complete();
});



obs$.subscribe(observer);
