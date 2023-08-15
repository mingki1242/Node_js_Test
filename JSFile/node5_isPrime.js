const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');


const threads = new Set();
const limit = 100000000;
const amount = Math.floor(limit/100);


for(let i = 0 ;i<100;i++)
{
    let start = i*amount;
    let end = (i<99) ? (i+1) * amount : limit;
    threads.add(new Worker('./isPrime.js', { workerData: { start, end } }));
}

let count = 0;
for (let worker of threads) {
    worker.on('message', data => {count += Number(data)});
    worker.on('exit', () => {
        threads.delete(worker);
        if (threads.size === 0) console.log('소수 계산 완료' , count);
    });
}

