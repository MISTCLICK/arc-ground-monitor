import { createFileRoute } from "@tanstack/react-router";

import Console from "~/components/Console";
import BigButton from "~/components/BigButton";
import RocketImage from "~/images/rocket.png";

export const Route = createFileRoute("/_layout/")({
  component: Home,
});

function Home() {
  return (
    <main className="container mx-auto flex gap-6 pt-4 h-full">
      <Console />
      <div className="flex flex-1 flex-col justify-between h-4/5">
        <div className="w-full flex-1 flex justify-end">
          <img
            src={RocketImage}
            alt="A Rocket from Fusion"
            className="h-full"
          />
        </div>
        <div className="flex justify-between">
          <BigButton>Arm</BigButton>
          <div className="flex gap-6">
            <BigButton variant="primary">Map</BigButton>
            <BigButton variant="primary">Track</BigButton>
          </div>
        </div>
      </div>
    </main>
  );
}
