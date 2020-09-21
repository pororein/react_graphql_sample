import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const Schema = mongoose.Schema;

const ReviewListModel = new Schema({
    title: String,
    documentPath: String,
    tags: [String],
    checkListIds: [ObjectId],
    pointOutList: [ObjectId],
    reviewerList: [{
        _id: ObjectId,
        role: Number
    }],
    revieweeList: [{
        _id: ObjectId,
        role: Number
    }],
    participantList: [{
        _id: ObjectId,
        role: Number
    }],
    status: Number,
    scope: Number,
    creator: String,
});

export default mongoose.model('review_list', ReviewListModel);