import { Hero, Activities, Footer, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Activities />
      <Footer />
    </main>
  );
}
