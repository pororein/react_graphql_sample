import type { PointOut } from "./PointOut";
import type { User } from "./User";
import type { ReviewStatus } from "./ReviewStatus";
import type { Scope } from "./Scope";
import { ReviewMember } from './ReviewMember';

export type ReviewInfo = {
    id?: string,
    title?: string,
    documentPath?: string,
    tags?: string[],
    checkListIds?: string[],
    pointOutList?: PointOut[],
    reviewerList?: ReviewMember[],
    revieweeList?: ReviewMember[],
    participantList?: ReviewMember[],
    status?: ReviewStatus,
    scope?: number,
};