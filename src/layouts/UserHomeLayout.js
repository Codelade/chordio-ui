import Navbar from "../components/Navbar";
import UserHome from "../components/UserHome";
import Footer from "../components/Footer";

const UserHomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-8">
        <UserHome />
      </main>
      <Footer />
    </div>
  );
};

export default UserHomeLayout;
