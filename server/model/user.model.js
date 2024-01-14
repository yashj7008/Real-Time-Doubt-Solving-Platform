import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
    fullName :{
        type : String,
        required: [true,"Name is required !"],
    },
    email :{
        type : String,
        required: [true,"Name is required !"],
    },
    password :{
        type : String,
        required: [true,"Name is required !"],
        select : false,
    },
    role :{
        type : String,
        enum : ['Students', 'Tutors'],
        default : 'Students',
    },
    user_language :{
        type : String,
        enum : ['Hindi', 'English'],
    },
    subject_expertise : {
        type : String,
    },
    class : {
        type : String,
    } },
    {
        timestamps: true
    });

    UserSchema.methods = {
        generateJWTToken: function() {
            return jwt.sign(
                { id: this._id, role : this.role},
                process.env.JWT_PASSWORD,
                {
                    expiresIn: process.env.JWT_EXPIRY
                }
            )
        }
    }
    const User = model('user', UserSchema);

    export default User;