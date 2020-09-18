import { GraphQLClient } from "graphql-request";
import appConfig from "../environment/config";

const endPoint: string = `${appConfig.serverURL}/graphql`;

export default new GraphQLClient(endPoint,
    {
        mode: "cors"
    });
