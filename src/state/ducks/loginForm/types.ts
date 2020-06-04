import type { Store as ReduxStore, Dispatch as ReduxDispatch } from "redux";

type Id = string;
type Password = string;

type LoginInfo = {
    id: Id,
    password: Password,
};

type LoginInfoElement = Id | Password;

type LoginInfoType = "ID" | "PASSWORD";

type Action = { type: "LOGIN" }
    | { type: "UPDATEID", id: Id }
    | { type: "UPDATEPASSWORD", password: Password }
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
    Id,
    Password,
    LoginInfo,
    LoginInfoElement,
    LoginInfoType,
    Action,
    Status,
    LoginFormState,
    Store,
    Dispatch,
};
