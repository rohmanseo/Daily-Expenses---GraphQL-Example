import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    createdAt: Date,
    updatedAt: Date
});

expenseSchema.pre('save', function(next){
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if(!this.createdAt){
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('expense', expenseSchema);