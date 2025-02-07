import { Outlet, createFileRoute } from "@tanstack/react-router";

import Nav from "~/components/Nav";

export const Route = createFileRoute("/_layout")({
  component: MainLayout,
});

function MainLayout() {
  return (
    <div className="h-dvh">
      <Nav />
      <Outlet />
    </div>
  );
}
