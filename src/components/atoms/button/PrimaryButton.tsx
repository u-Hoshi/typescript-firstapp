import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  // オプションの二つには初期値を設定しておく
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button
      bg="teal.400"
      color="white"
      borderRadius="20"
      // hoverだけプロパティの書き方気をつける
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
