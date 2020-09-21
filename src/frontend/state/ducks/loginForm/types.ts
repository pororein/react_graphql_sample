import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";
import type { LoginInfo, LoginStatus } from "../../../types";

type LoginInfoType = "ID" | "PASSWORD";

type Action = { type: "LOGIN" }
    | { type: "UPDATEID", id: string }
    | { type: "UPDATEPASSWORD", password: string }
    | { type: "CLEANING", loginInfo: LoginInfo }
    | { type: "LOGGINGIN", status: "LOGGINGIN" }
    | { type: "FAILED", status: "FAILED" }
    | { type: "SUCCESS", status: "SUCCESS" };

type Status = "LOGGINGIN" | "FAILED" | "SUCCESS" | "INIT";

type LoginFormState = {
    loginInfo: LoginInfo,
    status: Status,
};

type Store = ReduxStore<LoginFormState, Action>;

type Dispatch = ReduxDispatch<Action>;

export {
    LoginInfo,
    LoginInfoType,
    Action,
    Status,
    LoginFormState,
    Store,
    Dispatch,
};
