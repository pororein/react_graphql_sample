import type { ReviewMemberType } from "./ReviewMemberType";
import type { User } from "./User";

export type ReviewMember = {
    member: User
    memberType: ReviewMemberType
}