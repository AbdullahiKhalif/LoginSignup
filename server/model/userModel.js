import mongoose from 'mongoose';
import validator from 'validator';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        validate: [
            {
                validator: function (value) {
                    return /^[A-z][A-Za-z0-9-_]{3,23}$/.test(value);
                },
                message: "username does not have to special characters"
            }
        ]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, "please enter a valid email"]
    },
    password:{
        type: String,
        required: true,
        validate: [
            {
                validator: function (value) {
                    return validator.isStrongPassword(value);
                },
                message: "Password must contain one or more alphanumeric characters and symbols"
            }
        ]
    }
},{timestamps: true});

const userModel = mongoose.model("User", userSchema);

export default userModel;