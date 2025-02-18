const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/skillacademy';

function simpleConnect(){
    mongoose.connect(mongoURI)
    .then(resp => console.log('connected'))
    .catch(error => console.log(`Error Occured ${error}`))
}

async function connect(){
    try {
        const resp = await mongoose.connect(mongoURI);
        console.log('Connected');
    } catch (error) {
        console.log(`Error Occured ${error}`);
    }
}

// connect();
// simpleConnect();

module.exports = {connect};