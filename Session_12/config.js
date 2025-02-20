//DB Connections
const mongoose= require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

// mongoose.connect('mongodb://localhost:27017/ums')
mongoose.connect(process.env.MONGO_URI)
.then(resp=>console.log('Connected'))
.catch(err=>console.log('Error Occured',err));
