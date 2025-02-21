const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const password = "sonam@123";

async function encrypt(password){
    const hashPassword = await bcrypt.hash(password,10);
    console.log(hashPassword);

    const match = await bcrypt.compare('Sonam@1234',hashPassword);
    const match1 = await bcrypt.compare('sonam@123',hashPassword);
    console.log(match);
    console.log(match1);
}

encrypt(password);

const SECRET = "hello1234";
function createToken(payload){
    const token = jwt.sign(payload, SECRET);
    console.log(token);

    const data = jwt.verify(token, SECRET);
    console.log(data);
}

createToken({id:"mdshahrukh1", name:"Asif", email:"asif@gmail.com"});