function parallel_fetches(urls)
{
    return Promise.all (urls.map(url => {
        return new Promise((resolve , rejected) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => rejected(new Error(err)))
        })
    }));
}

const urls=[
'https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2',
'https://jsonplaceholder.typicode.com/todos/3'
]

parallel_fetches(urls)
.then(contents => console.log('Downloaded contents: ',contents))
.catch(error => console.log(error));
