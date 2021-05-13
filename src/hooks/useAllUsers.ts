/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

type Props = {};

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch(() => {
        showMessage({
          title: "ユーザ情報の取得に失敗しました",
          status: "error"
        });
      })
      .finally(() => {
        setLoading(false);
      });
    // 今回は銅的に変わるものがないのでeslintの設定を無効にするs
  }, []);
  return { getUsers, loading, users };
};
