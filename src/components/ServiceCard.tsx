type Props = {
  title: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  testimonial: string;
};

export default function ServiceCard({
  title,
  description,
  features,
  price,
  image,
  testimonial,
}: Props) {
  return (
    <div className="border rounded shadow p-4">
      <img
        src={image}
        alt={title}
        className="mb-4 w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <ul className="list-disc list-inside mb-2">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="font-semibold mb-2">Starting at: {price}</p>
      <blockquote className="italic border-l-4 pl-2 border-gray-400">
        {testimonial}
      </blockquote>
    </div>
  );
}
