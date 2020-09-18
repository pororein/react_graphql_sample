import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema";
import dbClient from "./util/mongoDBClient";
import cors from "cors";

const PORT = 8080;
const app = express();

dbClient.connect();

app.use(bodyParser.text({ type: 'application/graphql' }))
app.use(bodyParser.json());
app.use(cors());

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

app.listen(PORT, () => {
    console.log(`Started on port: ${PORT}`);
});