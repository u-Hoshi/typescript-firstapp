import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  // 認証のところはコードが長くなりやすいのでカスタムフックとする
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      // 入力したidをクエリパラメータに入れてURLを送り、それが存在していたらok,なかったらエラーとする
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            setLoginUser(res.data);
            showMessage({ title: "ログイン完了", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザが見つかりませんでした",
              status: "warning"
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできませんでした", status: "error" });
          setLoading(false);
        });
      // .finally(() => {
      //   setLoading(false);
      // });
    },
    [history, showMessage, setLoginUser]
  );
  // ログインの関数とloadingのstateを返してあげないと他でつかえない
  return { login, loading };
};
