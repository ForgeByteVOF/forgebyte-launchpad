import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ForgeByte" },
      { name: "description", content: "Get in touch with ForgeByte via email, GitHub or Discord." },
      { property: "og:title", content: "Contact — ForgeByte" },
      { property: "og:description", content: "Let's build something great together." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Contact />
    </div>
  ),
});
