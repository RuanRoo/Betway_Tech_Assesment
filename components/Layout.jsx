import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

    // function to open and close register modal, and passing it to the header and footer component
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="mainContainer">
      <Header
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
      <Navbar />
      {children}
      <Footer
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default Layout;
