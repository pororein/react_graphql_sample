import {
    gql
} from "graphql-request";

export default gql `
    query {
        checkListMany {
            _id
            title
            items {
                title
                detail
                performed
                _id
            }
        }
    }
`;