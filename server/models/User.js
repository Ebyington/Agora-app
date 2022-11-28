const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const History = require('./History');

const userSchema = new Schema({

        email: {
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength: 8
        },
        fName:{
            type: String,
            required: true,
            trim: true
        },
        lName: {
            type: String,
            required: true,
            trim: true
        },
        history:[History.schema]
});

userSchema.pre('save', async function(pass){
    if (this.isNew || this.isModified('password')){
        const saltCost = 10;
        this.password = await bcrypt.hash(this.password, saltCost);
    }
    pass();
});

userSchema.methods.isCorrectPass = async function(pass){
    return await bcrypt.compare(pass, this.pass);
};

const User = mongoose.model('User', userSchema);

module.exports = User;