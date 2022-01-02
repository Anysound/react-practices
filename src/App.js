import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./context";
import { AppRouter } from "./UI/AppRouter";
import { Navbar } from "./UI/Navbar/Navbar";

function App() {
  const [auth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true)
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
