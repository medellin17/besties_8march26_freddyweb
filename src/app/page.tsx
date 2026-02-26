import Link from 'next/link';

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center crt bg-black text-white px-4 relative">
      {/* Dynamic scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('/assets/bg/office.png')] bg-cover bg-center" />

      <div className="z-10 flex flex-col items-center max-w-md text-center gap-12">
        <h1 className="font-press-start text-3xl md:text-5xl text-red-600 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] leading-loose">
          FREDDY FAZBEAR&apos;S<br />PIZZA
        </h1>

        <div className="flex flex-col gap-6 w-full max-w-[200px]">
          <Link
            href="/polina"
            className="font-press-start bg-white text-black py-4 px-6 rounded hover:bg-red-600 hover:text-white transition-colors duration-200 uppercase"
          >
            Polina
          </Link>
          <Link
            href="/masha"
            className="font-press-start border-2 border-white text-white py-4 px-6 rounded hover:bg-white hover:text-black transition-colors duration-200 uppercase"
          >
            Masha
          </Link>
        </div>
      </div>
    </main>
  );
}
