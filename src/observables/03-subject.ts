import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
	next: (value: string) => console.log('next:', value),
	error: (error: unknown) => console.warn('error:', error),
	complete: () => console.info('Completado'),
};

const interval$ = new Observable<number>((subscriber) => {
	const intervalId = setInterval(() => subscriber.next(Math.random()), 1000);

	return () => {
        clearInterval(intervalId);
        console.log('Intervalo destruido');
    }
});

const subject$ = new Subject();
const intervalSubject =interval$.subscribe(subject$);

const subscription = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
	subject$.next(10);
	subject$.complete();
    intervalSubject.unsubscribe();
}, 3500);
