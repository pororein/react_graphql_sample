import type { Role } from "./Role";

export type User = {
    id: string,
    firstName?: string,
    lastName?: string,
    role?: Role,
};
