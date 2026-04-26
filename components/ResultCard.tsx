type Props = {
  data: Record<string, string>;
};

export default function ResultCard({ data }: any) {
  return (
    <div className="mt-6 bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl shadow-sm">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="flex justify-between py-1">
          <span className="capitalize text-gray-600">{key}</span>

          <span className="font-semibold text-gray-800">
            ₹{String(value)}
          </span>
        </div>
      ))}
    </div>
  );
}