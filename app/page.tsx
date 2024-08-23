// #3 Import it wherever you want
import { MyFirstComponent } from "@/components/MyFirstComponent";

export default function Home() {
  return (
    <main className="container py-12">
      <h1 className="text-4xl">How to write component in React?</h1>
      {/* #1 Initialize */}
      <MyFirstComponent />
    </main>
  );
}
