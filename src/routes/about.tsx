import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Founders } from "@/components/sections/Founders";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ForgeByte" },
      { name: "description", content: "ForgeByte is a modern software studio focused on clean design and reliable technology." },
      { property: "og:title", content: "About — ForgeByte" },
      { property: "og:description", content: "Meet the team behind ForgeByte." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <About />
      <Founders />
    </div>
  ),
});
