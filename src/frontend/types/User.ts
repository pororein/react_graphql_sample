import type { Role } from "./Role";

export type User = {
    _id?: string,
    firstName?: string,
    lastName?: string,
    role?: Role,
};
