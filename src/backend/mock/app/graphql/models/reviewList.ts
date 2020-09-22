import mongoose from 'mongoose';
import { ObjectId, ObjectID } from 'mongodb';

const Schema = mongoose.Schema;

const ReviewListModel = new Schema({
    title: String,
    documentPath: String,
    tags: [String],
    checkLists: [{
        _id: ObjectID,
        title: String,
        items: [{
            title: String,
            detail: String,
            performed: Boolean
        }],
    }],
    pointOutList: [ObjectId],
    reviewerList: [{
        _id: ObjectId,
        eMailAddress: String,
        firstName: String,
        lastName: String,
    }],
    revieweeList: [{
        _id: ObjectId,
        eMailAddress: String,
        firstName: String,
        lastName: String,
    }],
    participantList: [{
        _id: ObjectId,
        eMailAddress: String,
        firstName: String,
        lastName: String,
    }],
    status: Number,
    scope: Number,
    creator: String,
});

export default mongoose.model('review_list', ReviewListModel);