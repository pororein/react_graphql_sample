import type { User } from "./User";
import type { Role } from "./Role";

type ProjectMember = {
    user: User,
    role: Role,
};

export { ProjectMember };