import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Custom Web Development",
    description:
      "We create responsive, fast-loading, and fully customized websites.",
    features: [
      "Custom UI/UX design",
      "Mobile responsiveness",
      "SEO-friendly structure",
      "Admin dashboard (optional)",
    ],
    price: "IDR 8.000.000 / project",
    image: "/gambar8.png",
    testimonial:
      "“BaniWeb Studio built our company website from scratch, and the result exceeded our expectations.” – Andi",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Launch your online store with a secure and conversion-optimized platform.",
    features: [
      "Product management",
      "Payment integration",
      "Shopping cart & checkout",
      "Order tracking system",
    ],
    price: "IDR 12.000.000 / project",
    image: "/gambar9.png",
    testimonial:
      "“Our online shop now runs smoothly thanks to BaniWeb Studio.” – Siti",
  },
  {
    title: "Website Maintenance & Support",
    description: "Let us handle updates, bug fixes, and performance checks.",
    features: [
      "Monthly backups",
      "Bug fixing & performance optimization",
      "Content updates",
      "Security monitoring",
    ],
    price: "From IDR 750.000/month",
    image: "/gambar10.png",
    testimonial:
      "“Reliable and quick to respond. We never have to worry about website issues anymore.” – Rizky",
  },
  {
    title: "Web Consulting & Strategy",
    description:
      "Need guidance on building or improving your digital presence?",
    features: [
      "Project planning sessions",
      "Technology stack recommendations",
      "UX audit reports",
      "MVP strategy for startups",
    ],
    price: "IDR 500.000 / session",
    image: "/gambar11.png",
    testimonial: "“BaniWeb Studio gave us clarity and direction.” – Fajar",
  },
];

export default function ServicesList() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}
