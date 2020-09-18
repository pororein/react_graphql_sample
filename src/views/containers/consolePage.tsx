import { connect } from "react-redux";
import { menubarSelectors, menubarTypes } from "../../state/ducks/menubar";
import menubar from "../components/menubar";
import operations from "../../state/ducks/menubar/operations";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state: any) => ({
    content: menubarSelectors.getContent(state),
    user: menubarSelectors.getUser(state),
});

const mapDispatchToProps = (dispatch: menubarTypes.Dispatch) => {
    return {
        showUserList: () => {
            dispatch(operations.showUserList());
        },
        createReviewRequest: () => {
            dispatch(operations.createReviewRequest());
        },
        showReviewList: () => {
            dispatch(operations.showReviewList());
        },
        showProjectList: () => {
            dispatch(operations.showProjectList());
        },
        createCheckList: () => {
            dispatch(operations.createCheckList());
        },
        showCheckList: () => {
            dispatch(operations.showCheckList());
        },
        logout: () => {
            dispatch(operations.logout());
        },
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withRouter(connector(menubar));