import { connect } from "react-redux";
import { reviewRequestFormSelectors, reviewRequestFormTypes } from "../../state/ducks/reviewRequestForm";
import reviewRequestForm from "../components/reviewRequestForm";
import operations from "../../state/ducks/reviewRequestForm/operations";
import { ReviewMember, Scope, User, CheckList } from "../../types";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state: any) => ({
    state: reviewRequestFormSelectors.getState(state),
});

const mapDispatchToProps = (dispatch: reviewRequestFormTypes.Dispatch) => {
    return {
        onChangeTitle: (title: string) => {
            dispatch(operations.updateReviewTitle(title));
        },
        onChangeDocPath: (path: string) => {
            dispatch(operations.updateReviewDocumentPath(path));
        },
        onChangeTags: (tags: string[]) => {
            dispatch(operations.updateReviewTags(tags));
        },
        onChangeReviewee: (members: User[]) => {
            dispatch(operations.updateRevieweeList(members));
        },
        onChangeReviewer: (members: User[]) => {
            dispatch(operations.updateReviewerList(members));
        },
        onChangeCheckList: (checkList: CheckList[]) => {
            dispatch(operations.updateReviewCheckList(checkList));
        },
        onChangeScope: (scope: number) => {
            dispatch(operations.updateReviewScope(scope));
        },
        onHandleClickCreate: () => {
            dispatch(operations.createReview());
        },
        onCloseAlert: () => {
            dispatch(operations.updateStateNone());
        },
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withRouter(connector(reviewRequestForm));