import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({

    id: {
        type: String,
        required:true,
    },
    question: {
        type: String,
        required:true,
    },
    options:{
        type: Object,
        required:true
    }
});

const Data = mongoose.model('Data',UserSchema);

export default Data;