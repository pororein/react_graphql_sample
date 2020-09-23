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
        $path: String,
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
                documentPath: $path
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