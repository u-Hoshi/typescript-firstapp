import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { UserCard } from "../orgnisms/user/UserCard";

// 予めメモ化しておく
export const UserManegement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }}>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="ほし"
          fullNmae="hoshi"
        ></UserCard>
      </WrapItem>
    </Wrap>
  );
});
