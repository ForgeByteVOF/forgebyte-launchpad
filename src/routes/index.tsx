import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyForgeByte } from "@/components/sections/WhyForgeByte";
import { Projects } from "@/components/sections/Projects";
import { Founders } from "@/components/sections/Founders";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <WhyForgeByte />
      <Projects />
      <Founders />
      <About />
      <Contact />
    </>
  );
}
