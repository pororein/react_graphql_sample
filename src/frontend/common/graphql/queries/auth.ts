import { gql } from "graphql-request";

export type AuthQueryParameter = {
    id: string
    password: string
}

export default gql`
    query ($eMailAddress: String!, $password: String!) {
        userOne(filter: {
            eMailAddress: $eMailAddress, 
            password: $password
        }) {
            _id
            firstName
            lastName
            role
        }
    }
`;