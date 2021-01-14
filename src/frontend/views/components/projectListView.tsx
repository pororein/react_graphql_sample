import React from "react";
import ListViewTable from "./molecules/listViewTable";
import type { Column } from "./molecules/listViewTable";

export type ProjectListInfo = {
  id: string;
  projectName: string;
};

/**
 *
 * プロジェクト一覧画面 コンポーネント
 * @export コンポーネント本体
 * @return {JSX.Element}
 */
export default function projectListView() {
  // TODO: バックエンド開発時に、以下の項目はDBから取得するようにする
  const columns: Column[] = [
    { id: "1", name: "id" },
    { id: "2", name: "projectName" },
  ];

  const rows = [
    { id: 1, projectName: "Aプロジェクト" },
    { id: 2, projectName: "Bプロジェクト" },
  ];

  return (
    <React.Fragment>
      <ListViewTable
        columns={columns}
        rows={rows}
        linkKey={"id"}
        handleAction={() => {
          console.log("link clicked");
        }}
      />
    </React.Fragment>
  );
}
