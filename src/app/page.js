import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
export default function Home() {
  return (
    <main className=" bg-white px-10 md:px-20 lg:px-40">
      <section className=" min-h-screen ">
        <Navbar />
        <Hero />
        <Services />
        <Jobs />
      </section>
    </main>
  );
}
