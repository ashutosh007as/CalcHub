type Props = {
  title: string;
  description: string;
};

export default function SEOContent({ title, description }: Props) {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 text-gray-700 text-sm">
      <h2 className="font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
}