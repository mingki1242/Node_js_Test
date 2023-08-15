for(i = 1;i<=5;i++)
{
    setTimeout(x => {
        console.log(x);
    } , i*100 , i)
}

console.log('Printed');