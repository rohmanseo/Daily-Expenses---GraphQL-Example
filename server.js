import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose, { mongo } from 'mongoose'
import schema from './lib/graphql';


mongoose.connect('mongodb://localhost:27017/expenses');
const db = mongoose.connection;

db.on('error', () => {
    console.log(`Error when connecting to database`)
}).once('open', () => {
    console.log(`Connected to database`)
});

const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
    res.send(`It's Works!`)
});

app.use('/graphql', graphqlHTTP(() => ({
   schema,
   graphiql: true,
   pretty: true
})));

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`)
});