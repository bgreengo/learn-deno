const food = Deno.args[0]

if (food === 'love'){
    console.log('Deno is born!')
} else {
    console.log('This sucks...')
}

// console.log(Deno.metrics());