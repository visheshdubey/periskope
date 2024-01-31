import PrimaryHeader from "@/components/headers/PrimaryHeader";
import SideBarNav from "@/components/navigation/SideBarNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex relative h-screen overflow-hidden">
      <SideBarNav />
      <div className="flex flex-col grow max-h-screen h-screen">
        <PrimaryHeader />
        <div className="flex grow bg-[#F9FAFB]">{children}</div>
      </div>
    </main>
  );
}
