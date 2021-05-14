import { VFC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    // routerの分岐を記述していく
    // 全体を~~~で囲った後にそれぞれのコンポーネントを~~~で囲う

    <Switch>
      <LoginUserProvider>
        {/* パスを指定する */}
        <Route exact path="/">
          <Login />
        </Route>

        {/* /home/以下のパスをもつコンポーネントを配置,ここでのパスはこれ以下のコンポーネント同士の共通パス */}
        {/* ここで~~~関数を使うことができる、その中にhomeRouterを置く */}
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  {/* ログインページ以外の時にヘッダーを表示したいのでここで囲う */}
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
        {/* 一致しないURLの時は404ページを表示する */}
      </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
