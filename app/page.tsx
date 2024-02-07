import Live from "@/components/Live";
import NavBar from "@/components/NavBar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <NavBar />
      <section className="flex h-full flex-row">
        <Live />
      </section>
    </main>
  );
}
