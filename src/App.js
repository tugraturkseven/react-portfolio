import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme, setTheme] = useState("business");

  const changeTheme = () => {
    if (theme === "pastel") {
      setTheme("business");
    } else {
      setTheme("pastel");
    }
  };

  const notify = (stat) => {
    if (stat === "success") {
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
        progress: undefined,
        theme: theme === "pastel" ? "light" : "dark",
      });
    } else if (stat === "loading") {
      toast.info("Sending message...", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: false,
        progress: undefined,
        theme: theme === "pastel" ? "light" : "dark",
      });
    } else if (stat === "empty") {
      toast.error("Please fill out all fields before sending.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: false,
        progress: undefined,
        theme: theme === "pastel" ? "light" : "dark",
      });
    } else {
      toast.error("Message failed to send. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        pauseOnHover: true,
        progress: undefined,
        theme: theme === "pastel" ? "light" : "dark",
      });
    }
  };

  return (
    <div
      data-theme={theme}
      className="min-h-screen max-w-md overscroll-none xs:max-w-full "
    >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar changeTheme={changeTheme} />
      <Hero />
      <Work theme={theme} />
      <Resume />
      <Contact notify={notify} />
    </div>
  );
}

export default App;
