import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
export default function Home() {
  return (
    <main className=" bg-white px-10">
      <section className=" min-h-screen ">
        <Navbar />
        <Hero />
        <Services />
      </section>
    </main>
  );
}
