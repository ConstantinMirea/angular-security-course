
var jwt = require('jsonwebtoken');
var fs = require('fs');


// verify an existing JWT
var existingToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjEyMDcxNTcsImV4cCI6MTY2MTIwNzI3Nywic3ViIjoiMSJ9.Oy1s-Qr_gHcMPgMBT86xXZ9NZBWjPaX-EfzUkiGKXjq_FkHXXTTOvhcJown1QmV_eB-ThyjfS8Ii8Zv2U7KKH0F63GqkAGT-Rm2umeV9mfwFZwn0wLuRDhkoV5vcZBYkOhMGvsBTXvJNHCNk1IB8sBce0RrkH0JWJ2JlvOnyITEOYo0dXjwe7Olt89rKz_VukmHCnYhofq4OXwytdJLxBTESa29oCK_K47jbFoDv02kkVTLEpra0aN72KrrK51-V5Ecfs0PZc9rC-qe6KyvY92RBXujMDGzqWjT2Hzoh-PJlAqu0l6NS0qvLmY81nX86d5jO9PPjNzqC7HadOu4xNg';


var publicKey = fs.readFileSync('./demos/public.key');


console.log("verifying");

const verify = jwt.verify(existingToken, publicKey);



console.log("Decoded JWT:", verify);

