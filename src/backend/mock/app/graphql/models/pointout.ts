import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PointoutModel = new Schema({
    title: String,
    targetPosition: String,
    detail: String,
    expand: Boolean
});

export default mongoose.model('pointout', PointoutModel);