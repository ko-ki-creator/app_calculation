import MessageApp from "./MessageApp";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          文字列Stateの練習
        </h1>
        <MessageApp />
      </div>
    </div>
  );
}