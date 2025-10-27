import { Outlet } from "react-router";
import Header from "../core-components/header";
import Main from "../core-components/main";
export default function LayoutMain() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  )
}