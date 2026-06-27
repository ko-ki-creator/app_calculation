import Timer from "./TImer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          タイマー機能
        </h1>
        <Timer />
      </div>
    </div>
  );
}