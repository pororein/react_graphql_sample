import type { ProjectMember } from "./ProjectMember";
import type { ReviewInfo } from "./ReviewInfo";
import type { Scope } from "./Scope";

type ProjectInfo = {
    id: string,
    members: ProjectMember[],
    detail: string,
    reviewList: ReviewInfo[],
    scope: Scope,
};

export { ProjectInfo };