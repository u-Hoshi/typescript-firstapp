import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, memo, useState, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

// ログインようのコンポーネント、しっかり型定義をする
// 予めメモ化しておく
export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザID"
            value={userId}
            onChange={onChangeUserId}
          />
          {/* <Button
            bg="teal.400"
            color="white"
            borderRadius="20"
            // hoverだけプロパティの書き方気をつける
            
            _hover={{ opacity: 0.8 }}
          >
            ログイン
          </Button> */}
          <PrimaryButton>ログイン</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
