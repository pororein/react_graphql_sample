import { connect } from "react-redux";
import { loginFormSelectors, loginFormTypes } from "../../state/ducks/loginForm";
import loginForm from "../components/loginForm";
import operations from "../../state/ducks/loginForm/operations";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state: any) => ({
    state: loginFormSelectors.getLoginFormStatus(state)
});

const mapDispatchToProps = (dispatch: loginFormTypes.Dispatch) => {
    return {
        login: () => {
            dispatch(operations.login());
        },
        onChangeId: (id: loginFormTypes.Id) => {
            dispatch(operations.updateId(id));
        },
        onChangePassword: (password: loginFormTypes.Password) => {
            dispatch(operations.updatePassword(password));
        }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default withRouter(connector(loginForm));