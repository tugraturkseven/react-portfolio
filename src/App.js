import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Work from "./components/Work";
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('pastel')

  const changeTheme = () => {
    if (theme === 'pastel') {
      setTheme('dark')
    } else {
      setTheme('pastel')
    }
  }

  return (
    <div data-theme={theme} className="min-h-screen">
      <Navbar changeTheme={changeTheme} />
      <Hero />
      <Work />
    </div>
  );
}

export default App;
