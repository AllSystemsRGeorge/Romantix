// require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./server/schemas');
const db = require('./server/config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/images', express.static(path.join(__dirname, '../client/images')));

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// };

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', async () => {
    await server.start();
    server.applyMiddleware({app});


    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});