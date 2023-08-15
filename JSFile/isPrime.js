const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');


function isPrime(num)
{

    if(num == 1) return false;
    for(let i = 2;i<num;i++)
    {
         if(num%i==0) return false;
    }
    return true;
}

const data = workerData;
let count =0;
for(let i =data.start ; i<data.end ; i++)
{
    if(isPrime(i)) count++;
}
parentPort.postMessage(count);