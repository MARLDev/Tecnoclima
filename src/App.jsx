import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sticky from "./Components/Sticky";

const App = () => {
  return (
    <>
      <Sticky />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
