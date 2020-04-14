const {Schema, model} = require ("mongoose");

const UserSchema = new Schema({
    profile:{
        name:String,
        company:String,
        phone:Number,
        photo:String,
        date:{
            type:Date,
            default: Date.now
        }
    },
    resource:[{
        url:String,
        date:{
            type:Date,
            default: Date.now
        }
    }],
    role:String,
})

module.exports = model("User",UserSchema)