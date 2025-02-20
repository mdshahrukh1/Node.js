
const usermodel = require('../models/user.model.js');

const registerUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body; //object destructure
        if(!name || !email || !username || !password){
          return res.status(400).send({message:'All fields are mandatory'})
        }
        const newUser = new usermodel({name, email, username, password});
        const resp = await newUser.save();
        return res.status(201).send({ message: "New User Created",user:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body; //object destructure
        if(!email || !password){
          return res.status(400).send({message:'Email and Password fields are mandatory'})
        }
        const user = await usermodel.findOne({email});
        // const user = await usermodel.findById({email}); wrong
        if(!user){
            return res.status(404).send({message:'EmailId is not registered with Us'});
        }
        if(user.password === password)
            return res.status(200).send({ message: "LoggedIn..!!",user })
        else
            return res.status(400).send({message:'Invalid Credentials..'})
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
};

const getallUsers = async (req, res) => {
    try {
        const resp= await usermodel.find();
        res.status(200).send({ users:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
};

const getUserbyID = async (req, res) => {
    try {
        const id= req.params.id;//read params from URL
        const resp= await usermodel.findById(id);
        res.status(200).send({ user:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
};

const updateUSerbyID = async (req, res) => {
    try {
        const id= req.params.id;//read params from URL
        //for data updation data will come from req.body
        const resp= await usermodel.findByIdAndUpdate(id,req.body);
        res.status(200).send({ user:resp,message:"User Updated" })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
};

module.exports = { registerUser, loginUser, getallUsers, getUserbyID, updateUSerbyID };  