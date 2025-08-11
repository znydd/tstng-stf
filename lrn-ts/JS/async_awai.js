// an async function always return a promise even if you return something else it will wrap it in a promise and send. or you ca
// directly send promise

async function getData() {
    return "hello Gigga"
}

let res = getData()
console.log(res.then(data => console.log(data)))

let resp = fetch("");
console.log(resp)

navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)

)
