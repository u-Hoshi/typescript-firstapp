import { memo, VFC } from "react";

// ログインようのコンポーネント、しっかり型定義をする
// 予めメモ化しておく
export const Home: VFC = memo(() => {
  return <p>ホームページです</p>;
});
