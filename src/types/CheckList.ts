import type { CheckItem } from "./CheckItem";

export type CheckList = {
    id: string,
    title: String,
    items?: CheckItem[],
};
