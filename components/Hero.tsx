type Props = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: Props) {
  return (
    <div className="text-center py-12 px-4 bg-gradient-to-r from-orange-300 to-orange-400 text-white">
      <h1 className="text-4xl font-bold mb-3">{title}</h1>
      <p className="opacity-90">{subtitle}</p>
    </div>
  );
}