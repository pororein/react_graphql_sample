import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const Schema = mongoose.Schema;

const ReviewListModel = new Schema({
    title: String,
    documentPath: String,
    tags: [String],
    checkListIds: [ObjectId],
    pointOutList: [ObjectId],
    reviewMembers: [{
        _id: ObjectId,
        role: Number
    }],
    status: Number,
    scope: Number
});

export default mongoose.model('review_list', ReviewListModel);