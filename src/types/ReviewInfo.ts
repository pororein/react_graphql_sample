import type { PointOut } from "./PointOut";
import type { User } from "./User";
import type { ReviewStatus } from "./ReviewStatus";
import type { Scope } from "./Scope";

type ReviewInfo = {
    id: string,
    title: string,
    documentPath: string,
    tags: string[],
    checkListIds: string[],
    pointOutList: PointOut[],
    reviewMembers: User[],
    status: ReviewStatus,
    scope: Scope,
};

export { ReviewInfo };