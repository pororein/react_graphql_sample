import { connect } from "react-redux";
import { reviewRequestFormSelectors, reviewRequestFormTypes } from "../../state/ducks/reviewRequestForm";
import reviewRequestForm from "../components/reviewRequestForm";
import operations from "../../state/ducks/reviewRequestForm/operations";
import { ReviewMember, Scope } from "../../types";
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
        onChangeTag: (index: number, tag: string) => {
            dispatch(operations.updateReviewTag(index, tag));
        },
        onChangeReviewee: (index: number, id: string) => {
            dispatch(operations.updateReviewee(index, id));
        },
        onChangeReviewer: (index: number, id: string) => {
            dispatch(operations.updateReviewer(index, id));
        },
        onChangeCheckList: (index: number, id: string) => {
            dispatch(operations.updateReviewCheckList(index, id));
        },
        onChangeScope: (scope: number) => {
            dispatch(operations.updateReviewScope(scope));
        },
        onHandleClickCreate: () => {
            dispatch(operations.createReview());
        },
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withRouter(connector(reviewRequestForm));