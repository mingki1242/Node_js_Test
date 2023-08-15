function http_get(str)
{
    fetch(str)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((err) => {
        if (err instanceof TypeError)
        console.log("Something is wrong with our server!");
        else console.error(err);
    })
}

http_get('https://jsonplaceholder.typicode.com/todos/1');
http_get('https://jsonplaceholder.typicode.cm/todos/1');

