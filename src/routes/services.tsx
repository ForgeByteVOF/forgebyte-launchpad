import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/sections/Services";
import { WhyForgeByte } from "@/components/sections/WhyForgeByte";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ForgeByte" },
      { name: "description", content: "Websites, Discord bots, automation, custom software and UI/UX design by ForgeByte." },
      { property: "og:title", content: "Services — ForgeByte" },
      { property: "og:description", content: "Premium software services built with modern technology." },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Services />
      <WhyForgeByte />
    </div>
  ),
});
