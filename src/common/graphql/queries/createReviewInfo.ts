import { gql } from "graphql-request";

export type CreateReviewInfoQueryType = {
    title: string
    path: string
    tags?: string[]
    checkLists?: string[]
    members: { _id: string, role: number }[]
    status: number
    scope: number
}

export default gql`
    mutation(
        $title: String,
        $documentPath: String,
        $tags: [String],
        $checkListIds: [MongoID],
        $members: [review_listReviewMembersInput],
        $status: Float,
        $scope: Float,
        $creator: String
    ) {
        reviewListCreate(
            record: {
                title: $title
                documentPath: $path
                tags: $tags
                checkListIds: $checkListIds
                reviewMembers: $members
                status: $status
                scope: $scope
                creator: $creator
            }
        ) {
            recordId
        }
    }
`;