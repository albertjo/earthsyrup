import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10"
      style={{ backgroundColor: "#ACEE89" }}>
      <Image
        src="/earthsyrup.svg"
        alt="earthsyrup"
        width={280}
        height={280}
        priority
      />
      <a
        href="https://tally.so/r/vG0EqD"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border-2 border-neutral-700 bg-transparent px-8 py-3 text-sm font-bold text-neutral-700 transition-opacity hover:opacity-70"
      >
        Season 1 Waitlist
      </a>
    </main>
  );
}
