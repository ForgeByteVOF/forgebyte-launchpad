import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ForgeByte" },
      { name: "description", content: "Selected projects and open-source work from ForgeByte." },
      { property: "og:title", content: "Projects — ForgeByte" },
      { property: "og:description", content: "A look at recent ForgeByte projects." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Projects />
    </div>
  ),
});
