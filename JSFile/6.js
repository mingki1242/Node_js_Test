function add(x,y)
{
     return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(console.log(`${x+y}`));


        },1000);
        })
}

function subtract(x,y)
{
     return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(x-y);


        },2000);
        })
}

function times(x,y)
{
     return new Promise((resolve) => {
            setTimeout(()=> {
                resolve(x*y);


        },1500);
        })
}

async function calculate(x,y)
{
    try{
        await add(x,y);
        const msg = await subtract(x,y);
        console.log(msg);
        console(await times(x,y));

    } catch (error) {
        console.log('error' , error.message);
    }
}

calculate(10,20)