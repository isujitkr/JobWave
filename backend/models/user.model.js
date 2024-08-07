import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    role: {
        type: String,
        enum:['candidate','recuriter'],
        require:true
    },
    profile:{
        bio:{type: String},
        skills:{type: String},
        resume:{type: String}, //url to resume file
        resumeOriginalName:{type: String},
        company:{type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
        profilePhoto:{
            type: String,
            default: ""
        }
    }
},{timestamps: true});

export const User = mongoose.model('User', userSchema);