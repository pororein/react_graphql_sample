import type { ProjectMember } from "./ProjectMember";
import type { ReviewInfo } from "./ReviewInfo";
import type { Scope } from "./Scope";

export type ProjectInfo = {
    _id?: string
    members: ProjectMember[]
    detail: string
    reviewList: ReviewInfo[]
    scope: Scope
};
