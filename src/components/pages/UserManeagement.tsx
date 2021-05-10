import { memo, VFC } from "react";

// ログインようのコンポーネント、しっかり型定義をする
// 予めメモ化しておく
export const UserManegement: VFC = memo(() => {
  return <p>ユーザー一覧ぺーじです</p>;
});
