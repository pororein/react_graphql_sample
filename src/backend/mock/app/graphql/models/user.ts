import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserModel = new Schema({
    eMailAddress: String,
    password: String,
    firstName: String,
    lastName: String,
    role: Number
});

export default mongoose.model('user', UserModel);