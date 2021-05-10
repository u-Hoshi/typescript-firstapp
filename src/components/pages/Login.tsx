import { memo, VFC } from "react";

// ログインようのコンポーネント、しっかり型定義をする
// 予めメモ化しておく
export const Login: VFC = memo(() => {
  return <p>ログインページだよ</p>;
});
