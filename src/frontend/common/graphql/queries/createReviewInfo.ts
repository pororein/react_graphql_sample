import { gql } from "graphql-request";

export type CreateReviewInfoQueryType = {
    title: string
    path: string
    tags?: string[]
    checkLists?: { _id: string, title: string}[]
    reviewerList: { _id: string, firstName: string, lastName: string, eMailAddress: string }[]
    revieweeList: { _id: string, firstName: string, lastName: string, eMailAddress: string }[]
    participantList: { _id: string, firstName: string, lastName: string, eMailAddress: string }[]
    status: number
    scope: number
}

export default gql`
    mutation(
        $title: String,
        $documentPath: String,
        $tags: [String],
        $checkLists: [review_listCheckListsInput],
        $reviewerList: [review_listReviewerListInput],
        $revieweeList: [review_listRevieweeListInput],
        $participantList: [review_listParticipantListInput],
        $status: Float,
        $scope: Float,
        $creator: String
    ) {
        reviewListCreate(
            record: {
                title: $title
                documentPath: $documentPath
                tags: $tags
                checkLists: $checkLists
                reviewerList: $reviewerList
                revieweeList: $revieweeList
                participantList: $participantList
                status: $status
                scope: $scope
                creator: $creator
            }
        ) {
            recordId
        }
    }
`;