import type { CheckItem } from "./CheckItem";

export type CheckList = {
    _id?: string,
    title?: String,
    items?: CheckItem[],
};
