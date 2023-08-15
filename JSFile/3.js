function foo(num1 , num2)
{
    return new Promise((resolve , rejected) => {
        setTimeout(()=> {
            if((num1+num2) % 2 === 0) resolve("fulfilled & Success 합");
            else rejected("rejected & Error 합");

    },1000);
    })
}

foo(10,20)
.then((msg) => console.log(msg))
.catch((msg) => console.log(msg));

foo(10,21)
.then((msg) => console.log(msg))
.catch((msg) => console.log(msg));