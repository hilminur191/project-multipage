import Image from "next/image";
export default function Tagline() {
  return (
    <section className="py-8 text-center bg-black text-white">
      <Image
        src="/logo.png"
        alt="Logo"
        width={250}
        height={50}
        className="mx-auto mb-4"
      />
      <p className="text-xl font-semibold">
        Crafting Web Experiences That Work.
      </p>
    </section>
  );
}
