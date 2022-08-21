
const util = require('util');

const crypto2= require('crypto');

export const randomBytes = util.promisify(crypto2.randomBytes)


// crypto.randomBytes(32, (err, num)=>{
//     console.log(num);
//     console.log(err);
// })

//util.promisify() rtturns a promise function that will take arguments like below ..


// randomBytes(32)
// .then(num =>console.log(num))
// .catch(err => console.error(err))
