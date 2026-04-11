import AuthMenu from "../components/AuthMenu";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <Navbar>
      <div className="w-full min-h-[calc(100vh-4rem)] flex-1 flex items-center justify-center bg-slate-100 dark:bg-slate-950 transition-colors duration-200">
        <div className="w-full max-w-2xl px-4 py-10 sm:px-6 lg:px-8 mx-auto">
          <AuthMenu />
        </div>
      </div>
      <Footer />
    </Navbar>
  );
};

export default AuthLayout;
