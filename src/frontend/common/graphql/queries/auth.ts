import { gql } from "graphql-request";

export type AuthQueryParameter = {
    eMailAddress: string
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