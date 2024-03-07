import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";
import { ChildrenProp } from "../invariants/Types.ts";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../invariants/Constants.ts";

export type NavBarProps = {
  menuRoutes: NavComponent[];
  profileRoutes: NavComponent[];
};

export type NavComponent = NavLink | NavDivider;

export enum DividerType {
  TRUE,
  FALSE,
}

export type Divider<DividerType> = {
  divider: DividerType;
};

export type NavLink = Divider<DividerType.FALSE> & {
  label: string;
  route: string;
};

export type NavDivider = Divider<DividerType.TRUE>;

export const NavBar: React.FC<NavBarProps> = ({
  menuRoutes,
  profileRoutes,
}) => {
  return (
    <div className="fixed top-0 z-10 flex h-16 w-full bg-blue-200">
      <div className="m-1 flex h-14 w-14 bg-blue-400">
        <DropdownMenu.Root>
          <Trigger>
            <HamburgerMenuIcon className="m-auto h-8 w-8" />
          </Trigger>
          <Content>{menuRoutes.map((r) => renderRoute(r))}</Content>
        </DropdownMenu.Root>
      </div>
      <div className="my-1 me-auto ms-1 grid h-14 content-center bg-blue-400 px-5">
        <div>
          <Link to={routes.main}>
            <h1 className="bold text-xl italic">Quote Flashcards</h1>
          </Link>
        </div>
      </div>
      <div className="my-1 me-1 ms-auto flex h-14 w-14 bg-blue-400">
        <DropdownMenu.Root>
          <Trigger>
            <PersonIcon className="m-auto h-8 w-8" />
          </Trigger>
          <Content>{profileRoutes.map((r) => renderRoute(r))}</Content>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

const renderRoute = (content: NavComponent) => {
  switch (content.divider) {
    case DividerType.TRUE:
      return <Separator />;
    case DividerType.FALSE:
      return (
        <Item>
          <Link to={content.route}>{content.label}</Link>
        </Item>
      );
  }
};

const Content: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <DropdownMenu.Content>
      <div className="bg-blue-500 p-2">{children}</div>
    </DropdownMenu.Content>
  );
};

const Trigger: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <DropdownMenu.Trigger asChild>
      <button
        className="m-auto h-12 w-12 bg-blue-500"
        aria-label="Menu options"
      >
        {children}
      </button>
    </DropdownMenu.Trigger>
  );
};

const Item: React.FC<ChildrenProp> = ({ children }) => {
  return (
    <DropdownMenu.Item asChild>
      <div className="m-2 grid h-12 min-w-24 content-center bg-amber-100 p-4">
        {children}
      </div>
    </DropdownMenu.Item>
  );
};

const Separator = () => {
  return (
    <DropdownMenu.Separator className="w-full bg-white" style={{ height: 1 }} />
  );
};
