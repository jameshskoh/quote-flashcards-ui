import { DividerType, NavComponent, NavBar } from "./components/NavBar.tsx";
import { Content } from "./components/Content.tsx";
import { Outlet } from "react-router-dom";
import { routes } from "./invariants/Constants.ts";

const menuRoutes: NavComponent[] = [
  {
    divider: DividerType.FALSE,
    label: "Manage routes",
    route: routes.main,
  },
];

const profileRoutes: NavComponent[] = [
  {
    divider: DividerType.FALSE,
    label: "Profile",
    route: routes.profile,
  },
  {
    divider: DividerType.TRUE,
  },
  {
    divider: DividerType.FALSE,
    label: "Logout",
    route: routes.logout,
  },
];

function App() {
  return (
    <>
      <NavBar menuRoutes={menuRoutes} profileRoutes={profileRoutes} />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

export default App;
