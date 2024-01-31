import Image from "next/image";

import Redirect from "@/components/widgets/Redirect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Redirect />
    </main>
  );
}
