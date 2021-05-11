import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  // 認証のところはコードが長くなりやすいのでカスタムフックとする
  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "ログイン完了", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザが見つかりませんでした",
              status: "warning"
            });
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできませんでした", status: "error" });
        })
        .finally(() => {
          setLoading(false);
        });
    },

    [history, showMessage]
  );
  // ログインの関数とloadingのstateを返してあげないと他でつかえない
  return { login, loading };
};
