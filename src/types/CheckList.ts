import type { CheckItem } from "./CheckItem";

type CheckList = {
    id: string,
    title: String,
    items: CheckItem[],
};

export { CheckList };