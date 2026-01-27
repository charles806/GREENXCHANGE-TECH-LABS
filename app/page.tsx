import Home from "./Home/page";
import Footer from "@/component/layout/Footer/Footer";
import Header from "@/component/layout/Header/Header";
const HomePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen max-w-7xl mx-auto">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
