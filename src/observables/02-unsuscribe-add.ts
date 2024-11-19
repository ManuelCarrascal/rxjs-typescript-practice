import { Observable, Observer, Subscription } from 'rxjs';

const observer: Observer<any> = {
	next: (value: string) => console.log('next:', value),
	error: (error: unknown) => console.warn('error:', error),
	complete: () => console.info('Completado'),
};

const interval$ = new Observable<number>((subscriber) => {
	let count = 0;
	const interval = setInterval(() => {
		count++;
		subscriber.next(count);
	}, 1000);

	return () => {
		clearInterval(interval);
		console.log('Intervalo destruido');
	};
});

const subscription: Subscription = interval$.subscribe(observer);
const subscription2: Subscription = interval$.subscribe(observer);
const subscription3: Subscription = interval$.subscribe(observer);

subscription.add(subscription2);
subscription.add(subscription3);

setTimeout(() => {
	subscription.unsubscribe();
    console.log('Completado timeout');
    
}, 3000);
