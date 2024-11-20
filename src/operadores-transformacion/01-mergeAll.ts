import { debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";


//helpers
const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = '';

    for(const user of users){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }
}

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);


//Streams
const input$= fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map(event => event.target['value']),
    map(text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)),
    mergeAll(),
    map((response: any) => response.items as GithubUser[])
).subscribe(users => {
    showUsers(users);
});
