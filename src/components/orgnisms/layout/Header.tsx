import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => {
    history.push("/home");
  }, [history]);

  const onClickUserManagement = useCallback(() => {
    history.push("/home/user_management");
  }, [history]);

  const onCLickSetting = useCallback(() => {
    history.push("/home/setting");
  }, [history]);

  return (
    // display:flexのようなもの、as="nav"でnav要素としてレンダリングされる
    // 色指定はbgを記述するだけで指定できる
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
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
            <Link onClick={onClickUserManagement}>ユーザ一覧</Link>
          </Box>
          <Link onClick={onCLickSetting}>設定</Link>
        </Flex>
        {/* iconbuttonを使う際にはaria-labelが必須 */}
        {/* コードが増えたの分割する */}
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      {/* こっちもコンポーネント分割をしておく */}
      {/* 受け取るpropsを増やしたい時は増やしたいコンポーネントのページのtype Propsを変更してあげる */}
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManegement={onClickUserManagement}
        onClickSetting={onCLickSetting}
      />
    </>
  );
});
