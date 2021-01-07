import type { SystemRole } from "./SystemRole";

export type User = {
    _id?: string,
    firstName?: string,
    lastName?: string,
    role?: SystemRole,
};
