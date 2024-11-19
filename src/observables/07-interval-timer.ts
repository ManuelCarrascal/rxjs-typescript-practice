import { interval, timer } from 'rxjs';

const observer = {
	next: (val) => {
		console.log('Next:', val);
	},
	complete: () => {
		console.log('Complete');
	},
};

const fromTodayIn5 = new Date(); //ahora
fromTodayIn5.setSeconds(fromTodayIn5.getSeconds() + 5);



const interval$ = interval(1000);
const timer$ = timer(fromTodayIn5);

console.log('Start');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('End');


