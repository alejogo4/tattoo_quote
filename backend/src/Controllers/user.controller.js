const UserModel = require("../Models/User");
let UserCtrl = {};



UserCtrl.createUser = (req,res)=>{
    try {
        const {role,profile} = req.body;
        const NewUser = new UserModel({
            profile,
            role
        })

        NewUser.save();
        console.log(NewUser);
        res.status(200).send("Created");
    } catch (error) {
        res.status(400).send(error);
    }
    
}



UserCtrl.addSource = async(req,res)=>{
   
    const {_id,resource} = req.body;
    try {
        await UserModel.findOneAndUpdate(
            { _id: _id }, 
            { $push: { resource: resource  }}
         )
         res.status(200).send("Updated");

    } catch (error) {
         res.status(400).send(error);
    }
    
}

UserCtrl.getUser = async(req,res)=>{
    try {
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

UserCtrl.getUsers = async(req,res)=>{
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).send(error);
    }
    
}

module.exports  = UserCtrl;