import CardSection from "./CardSection";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div className="flex-1">
        <MainContent />
        <CardSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;