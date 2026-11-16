import { Footer } from "@/components/Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-full flex-col items-center px-5 py-12">
      {children}
      <div aria-hidden className="min-h-[72px] flex-1" />
      <Footer />
    </main>
  );
}
