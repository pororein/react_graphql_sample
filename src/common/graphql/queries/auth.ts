import { gql } from "graphql-request";

export type AuthQueryParameter = {
    id: string
    password: string
}

export default gql`
    query ($id: String!, $password: String!) {
        userOne(filter: {
            eMailAddress: $id, 
            password: $password
        }) {
            _id
            firstName
            lastName
            role
        }
    }
`;