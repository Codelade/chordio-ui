import AdminNavbar from "../components/AdminNavbar";
import AdminCreateUser from "../components/AdminCreateUser";
import Footer from "../components/Footer";

const AdminCreateUserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminNavbar />
      <main className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 py-8">
        <AdminCreateUser />
      </main>
      <Footer />
    </div>
  );
};

export default AdminCreateUserLayout;
