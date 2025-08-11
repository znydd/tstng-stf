// let callback = (msg) => console.log(`I am the callback ${msg}`);



// function x(callback) {
//     console.log("before call back")
//     callback("Bitch")
// }
// x(callback)

// CallBacks has problems 1) CallBack hell and 2) Inversion of control(basically we pass the function to run on unknown place)
// To solve this we use "Promise"


const znyd = fetch(GITHUB_API);
console.log(znyd);
znyd.then(data => console.log(data))

// Basically what promise does
// it returns this {status:<pending>}-------after sometimes------{status:<fulfilled>} now we have the return respose inside this object 
// to use this object we use promiseObj.then(function(data){//a callback function to handle the data returned on promise})
// if there is other promises returned on the ".then()" then we can do chaining .then(data => promise2).then(data => promise2) 
// for error/reject we use .catch()


const d = getData(true)
console.log(d)
// Making a promise 

function getData(state) {
    return new Promise(
        function (resolve, reject) {
            if (state) {
                resolve("here is your data")
            } else {
                reject("error")
            }


        }
    )
}
