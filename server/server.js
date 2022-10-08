//require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

mongoose.connect('mongodb+srv://dianap:Babyzola23@cluster0.9ctxf.mongodb.net/Romantix?retryWrites=true&w=majority')
.then(() => {
    console.log('Success')
})
.catch(err => console.log(err));



 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
 });

db.once('open', async () => {
    await server.start();
    server.applyMiddleware({app});


    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});