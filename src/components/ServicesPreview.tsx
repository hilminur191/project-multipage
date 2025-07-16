export default function ServicesPreview() {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">Custom Web Development</h3>
          <p>Bespoke websites and apps tailored to your business goals.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">E-Commerce Solutions</h3>
          <p>Secure, scalable online stores that drive sales.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">Maintenance & Support</h3>
          <p>Ongoing care to keep your site running smoothly.</p>
        </div>
        <div className="p-4 border rounded shadow">
          <h3 className="font-bold mb-2">Consulting & Strategy</h3>
          <p>Expert advice to help you plan and execute your digital vision.</p>
        </div>
      </div>
    </section>
  );
}
