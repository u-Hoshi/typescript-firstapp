import { memo, ReactNode, VFC } from "react";
import { Header } from "../orgnisms/layout/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  console.log(props);
  const { children } = props;
  return (
    <>
      <Header />

      {children}
    </>
  );
});
