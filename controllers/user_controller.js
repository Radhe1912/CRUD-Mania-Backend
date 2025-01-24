const userModel = require('../models/user_model');

class userController{
    static getAllUsers = async (req, res)=>{
        try{
            const allUsers = await userModel.find({});
            if(allUsers){
                return res.status(200).json(allUsers);
            }
        }
        catch(err){
            return res.status(400).json(err);
        }
        res.send("All users");
    }

    static createUser = async (req, res) => {
        const { name, email, age } = req.body;
    
        try {
            if (!name || !email || !age) {
                return res.status(400).json({ message: "All fields are required" });
            }
    
            const newUser = new userModel({
                name,
                email,
                age
            });
    
            const savedUser = await newUser.save();
            return res.status(201).json(savedUser);
        } catch (err) {
            return res.status(500).json({ error: "Server error", details: err.message });
        }
    };

    static getSingleUser = async (req, res) => {
        const { id } = req.params;
        try{
            if(id){
                const userData = await userModel.findById(id);
                return res.status(200).json(userData);
            }
            else{
                return res.status(400).json({message : "id not found"});
            }
        }catch(err){
            return res.status(400).json(err);
        }
    }

    static updateUser = async (req, res) => {
        const { id } = req.params;
        try{
            if(id){
                const updateUserData = await userModel.findByIdAndUpdate(id, req.body);
                return res.status(200).json(updateUserData);
            }
            else{
                return res.status(400).json({message : "id not found"});
            }
        }catch(err){
            return res.status(400).json(err);
        }
    }

    static deleteUser = async (req, res) => {
        const { id } = req.params;
        try{
            if(id){
                const updateUserData = await userModel.findByIdAndDelete(id);
                return res.status(200).json(updateUserData);
            }
            else{
                return res.status(400).json({message : "id not found"});
            }
        }catch(err){
            return res.status(400).json(err);
        }
    }
}

module.exports = userController;