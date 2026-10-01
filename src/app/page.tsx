import type { Metadata } from "next";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import LatestWriting from "@/components/home/LatestWriting";
import SelectedWork from "@/components/home/SelectedWork";
import Stack from "@/components/home/Stack";
import { posts, rssAlternates } from "@/lib/posts";

export const metadata: Metadata = {
  alternates: { canonical: "/", ...rssAlternates },
};

const Home = () => {
  const hasWriting = posts.length > 0;
  // Section numbers stay sequential when Writing is hidden (no published posts yet).
  const order = [
    "work",
    "experience",
    ...(hasWriting ? ["writing"] : []),
    "stack",
    "about",
  ];
  const index = (id: string) => String(order.indexOf(id) + 1).padStart(2, "0");

  return (
    <>
      <Hero />
      <SelectedWork index={index("work")} />
      <Experience index={index("experience")} />
      {hasWriting ? <LatestWriting index={index("writing")} /> : null}
      <Stack index={index("stack")} />
      <About index={index("about")} hasWriting={hasWriting} />
      <Contact />
    </>
  );
};

export default Home;
