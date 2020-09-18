import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CheckListModel= new Schema({
    title: String,
    items: [{
        title: String,
        detail: String,
        performed: Boolean
    }],
    owner: String
});

export default mongoose.model('check_list', CheckListModel);