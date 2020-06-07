import {GraphQLList} from 'graphql';
import {expenseType} from "../../types/expense";
import ExpenseModel from '../../../models/expense';

export default {
    type: GraphQLList(expenseType),
    resolve(root,params){
        const expenses = ExpenseModel.find().exec();
        if (!expenses){
            throw new Error(`Can't getting list of the expenses`);
        }
        return expenses;
    }
}