import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold">Airbnbs</h1>
        </section>
        <Footer />
      </main>
    </>
  );
}
