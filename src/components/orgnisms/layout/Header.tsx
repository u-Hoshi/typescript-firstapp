import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
    // display:flexのようなもの、as="nav"でnav要素としてレンダリングされる
    // 色指定はbgを記述するだけで指定できる
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align="center" as="a">
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          ユーザ管理アプリ
        </Heading>
      </Flex>
      <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link>ユーザ一覧</Link>
        </Box>
        <Link>設定</Link>
      </Flex>
    </Flex>
  );
});
