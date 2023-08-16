function isPrime(num)
{

    if(num == 1) return false;
    for(let i = 2;i<num;i++)
    {
         if(num%i==0) return false;
    }
    return true;
}

console.time()
let count = 0;

for(let i = 2 ; i<10000000 ; i++)
{

     if(isPrime(i))
     {
        count++;
     }

}
console.log(count);
console.timeEnd()

