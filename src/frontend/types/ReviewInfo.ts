import type { PointOut } from "./PointOut";
import type { User } from "./User";
import type { ReviewStatus } from "./ReviewStatus";
import type { Scope } from "./Scope";
import { ReviewMember } from './ReviewMember';
import { CheckList } from './CheckList';

export type ReviewInfo = {
    _id?: string,
    title?: string,
    documentPath?: string,
    tags?: string[],
    checkLists?: CheckList[],
    pointOutList?: PointOut[],
    reviewerList?: User[],
    revieweeList?: User[],
    participantList?: User[],
    status?: ReviewStatus,
    scope?: number,
    creator?: string,
};