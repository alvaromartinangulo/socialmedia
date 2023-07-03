import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import { useSelector } from "react-redux";
import Following from "./components/Following/Following";
import ForYou from "./components/ForYou/ForYou";
import Saved from "./components/Saved/Saved";

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div
      className="App"
    >
      <Routes>
        <Route
          path="/"
          element={<Landing/>}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        <Route path="/" element={<LayoutsWithNavbar />}>
          <Route
            path="/following"
            element={<Following />}
          />
          <Route
            path="/foryou"
            element={<ForYou />}
          />
          <Route
            path="/saved"
            element={<Saved />}
          />
        </Route>{/* 
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

function LayoutsWithNavbar() {
  return (
    <>
      {/* Your navbar component */}
      <Navbar />

      {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
      <Outlet /> 
      
      {/* You can add a footer to get fancy in here :) */}
    </>
  );
}

export default App;