import { interval, reduce, take, tap } from "rxjs";


const numbers= [1,2,3,4,5];

const totalReducer = (accumulator:number, currentValue: number)=>  accumulator + currentValue;

const total = numbers.reduce(totalReducer, 0);

console.log(total); // 15

interval(500).pipe(
    take(5),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next:',val),
    complete: () => console.log('Complete')
})
