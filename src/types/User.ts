import type { Role } from "./Role";

type User = {
    id: string,
    firstName: string,
    lastName: string,
    role: Role,
};

export { User };