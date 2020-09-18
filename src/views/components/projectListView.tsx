import React from "react";
import ListViewTable from "./molecules/listViewTable";
import type { Props, Column } from "./molecules/listViewTable";

export type ProjectListInfo = {
    id: string,
    projectName: string,
};

export default function projectListView() {
    // TODO: バックエンド開発時に、以下の項目はDBから取得するようにする
    const columns: Column[] = [
        { id: '1', name: 'id' },
        { id: '2', name: 'projectName' },
    ];

    const rows = [
        { id: 1, projectName: 'Aプロジェクト' },
        { id: 2, projectName: 'Bプロジェクト' },
    ];

    // TODO: 実実装時にhandleActionはプロジェクト編集画面への画面遷移で使用する
    const viewListProps: Props = {
        columns: columns,
        rows: rows,
        handleAction: () => { },
    };

    return (
        <React.Fragment>
            <ListViewTable columns={columns} rows={rows} linkKey={"id"} handleAction={() => { console.log("link clicked"); }} />
        </React.Fragment>
    );
}