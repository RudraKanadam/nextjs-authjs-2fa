import GlobalNavbar from "@/components/global/globalNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-r from-slate-50 to-gray-300">
      <GlobalNavbar />
      <h1> Hello from NextJS 2FA</h1>
    </main>
  );
}
