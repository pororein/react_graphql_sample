import { gql } from "graphql-request";

export default gql`
    query {
        userMany {
            _id
            eMailAddress
            firstName
            lastName
            role
        }
    }
`;