import { memo, VFC } from "react";

// ログインようのコンポーネント、しっかり型定義をする
// 予めメモ化しておく
export const Setting: VFC = memo(() => {
  return <p>設定ページです</p>;
});
