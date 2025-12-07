import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="
      min-h-screen 
      bg-white text-gray-900 
      dark:bg-slate-900 dark:text-slate-100 
      transition-colors duration-500
    ">
      <Navbar />

      <main className="px-6 md:px-16 lg:px-24">
        {children}
      </main>

      <Footer />
    </div>
  );
}
