export default function OurTeam() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded text-center">
          <img
            src="/gambar4.png"
            alt="Nurbani"
            className="mx-auto mb-2 w-32 h-32 object-cover rounded-full"
          />
          <h3 className="font-bold">
            Nurbani – Founder & Full-Stack Developer
          </h3>
        </div>
        <div className="p-4 border rounded text-center">
          <img
            src="/gambar5.png"
            alt="Rina"
            className="mx-auto mb-2 w-32 h-32 object-cover rounded-full"
          />
          <h3 className="font-bold">Rina Pratama – Front-End Developer</h3>
        </div>
        <div className="p-4 border rounded text-center">
          <img
            src="/gambar4.png"
            alt="Dedi"
            className="mx-auto mb-2 w-32 h-32 object-cover rounded-full"
          />
          <h3 className="font-bold">Dedi Santoso – Back-End Developer</h3>
        </div>
        <div className="p-4 border rounded text-center">
          <img
            src="/gambar5.png"
            alt="Intan"
            className="mx-auto mb-2 w-32 h-32 object-cover rounded-full"
          />
          <h3 className="font-bold">Intan Sari – Project Manager</h3>
        </div>
      </div>
    </section>
  );
}
