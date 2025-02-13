const express = require('express');

const app = express();
app.use(express.json());//read the data coming from request body

const users = [];

app.post("/api/user",(req, res)=> {
    const data = req.body;
    users.push(data);
    res.status(201).send('New User created');
    // res.status(201).send('POST API Triggered');
});

// app.get("/api/user",(req, res)=> {
//     res.status(201).send(users); //send('GET API Triggered');
// });

app.get("/api/user/:id",(req, res)=> {
    const id = req.params.id;  //Get the user URL Parameter
    const user = users.find((val)=> val.id == id); //check if the user available with given ID
    if(user){
        res.status(200).send(user);
    } else {
        res.status(404).send('Not Found');
    }
});

// app.put("/api/user",(req, res)=> {
//     res.send('PUT API Triggered');
// });

app.put("/api/user/:id",(req, res)=> {
    const id = req.params.id;  
    const index = users.findIndex((val)=> val.id == id); 
    if(index >= 0){
        users[index] = req.body;
        res.status(200).send("User Updated");
    } else {
        res.status(404).send('Not Found to update');
    }
});

// app.delete("/api/user",(req, res)=> {
//     res.send('DELETE API Triggered');
// });

app.delete("/api/user/:id",(req, res)=> {
    const id = req.params.id;  
    const index = users.findIndex((val)=> val.id == id); 
    if(index >= 0){
        users.splice(index, 1); //Data deleted
        res.status(200).send("User Updated");
    } else {
        res.status(404).send('Not Found to delete');
    }
});


app.listen(5000, ()=> {
    console.log("Server is listening to port no 5000");
})