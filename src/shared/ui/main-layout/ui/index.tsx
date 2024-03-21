import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div id="content">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};


