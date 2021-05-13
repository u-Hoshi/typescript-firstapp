import {
  Box,
  Center,
  Image,
  Spinner,
  Stack,
  Text,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { UserCard } from "../orgnisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import axios from "axios";

// 予めメモ化しておく
export const UserManegement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();
  const [img, setImg] = useState();
  console.log(users);
  useEffect(() => getUsers(), []);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data);
        setImg(res.data.message);
      })
      .catch(() => {
        console.log("errだよ");
      });
  }, []);

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
            <WrapItem key={user.id}>
              <UserCard
                // imageUrl="https://source.unsplash.com/random"
                imageUrl={img}
                userName={user.username}
                fullName={user.name}
              ></UserCard>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
