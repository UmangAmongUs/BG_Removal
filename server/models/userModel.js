import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkid : {type:String , require:true , unique:true},
    email : {type:String , require:true , unique:true},
    photo : {type:String , require:true},
    firstName : {type:String},
    lastName : {type:String},
    creditBalance : {type:Number , default:5}
})
const COLLECTION_NAME = "in bg removal"
const userModel = mongoose.Model.user || mongoose.model("user",userSchema,COLLECTION_NAME)

export default userModel