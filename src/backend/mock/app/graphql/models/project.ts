import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const Schema = mongoose.Schema;

const ProjectModel = new Schema({
    name: String,
    members: [{
        _id: ObjectId,
        role: Number
    }],
    reviewList: [String],
    scope: Number
});

export default mongoose.model('project', ProjectModel);