function repeat_function(callback , interval)
{
    const tid = setInterval(callback , interval)
    function stopExecution(){clearInterval(tid)}
    return stopExecution
}

function print()
{
    console.log("1sec print...")
}

const stopFunction = repeat_function(print , 1000)
setTimeout(stopFunction , 4000)



