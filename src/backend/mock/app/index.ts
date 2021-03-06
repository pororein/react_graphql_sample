import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import dbClient from "./util/mongoDBClient";
import cors from "cors";
import mongoose from 'mongoose';

const PORT = 8080;
const app = express();

dbClient.connect();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text({ type: 'application/graphql' }))
app.use(bodyParser.json());
app.use(cors());

app.get("/", (res, req, next) => {
    req.sendFile('index.html');
});

app.use(
    "/graphql",
    graphqlHTTP(async (request, response, graphQLParams) => {
        console.dir(request);
        return {
            schema: await schema(),
            graphiql: true,
            pretty: true,
        };
    })
);

let connection = mongoose.connection;

connection.on('error', () => {
    console.log('mongodb server connect failed');
    console.log('retry connection...');

    setTimeout(() => {
        dbClient.connect();
        connection = mongoose.connection;
    }, 3000);
});

connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Started on port: ${PORT}`);
    });
});
