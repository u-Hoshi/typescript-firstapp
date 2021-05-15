import {
  Center,
  Spinner,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../orgnisms/user/UserCard";
import { useAllUsers } from "../hooks/useAllUsers";
import { UserDetailModal } from "../orgnisms/user/UserDetailModal";
import { useSelectUser } from "../hooks/useSelectUser";
import { useLoginUser } from "../hooks/useLoginUser";
// import axios from "axios";

// 予めメモ化しておく
export const UserManegement: VFC = memo(() => {
  // モーダルの表示はモーダル自体とカードが関わってくるので、モーダルのアクションは二つの親コンポーネントであるここで管理する
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();
  useEffect(() => getUsers(), []);
  // propsとして関数を渡すときは毎回再作成をするとレンダリングの効率が落ちるのでusecallbackでメモ化する
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    // モーダルをクリックしたたびに取得し直す必要がある。そうしないと初回レンダリングの情報(null)がずっと入ることになる
    [users, onSelectUser, onOpen]
  );

  // useEffect(() => {
  //   axios
  //     .get("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => {
  //       console.log(res.data);
  //       setImg(res.data.message);
  //     })
  //     .catch(() => {
  //       console.log("errだよ");
  //     });
  // }, []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner size="xl" color="teal" />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="space-around">
          {/* <UserCard
              imageUrl="https://source.unsplash.com/random"
              userName="ほし"
              fullNmae="hoshi"
            ></UserCard> */}
          {users.map((user) => (
            <WrapItem key={user.id} as="div">
              <UserCard
                // imageUrl="https://source.unsplash.com/random"
                // imageUrl={img}
                id={user.id}
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              ></UserCard>
            </WrapItem>
          ))}
        </Wrap>
      )}
      {/* カードをクリックしたときにユーザー詳細が見れるようにする */}
      <UserDetailModal
        user={selectedUser}
        onClose={onClose}
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
});
