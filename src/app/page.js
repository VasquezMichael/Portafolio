import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className=" bg-white px-10">
      <section className=" min-h-screen ">
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
