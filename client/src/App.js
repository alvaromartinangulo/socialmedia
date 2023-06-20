import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === "http://localhost:3000/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={<Landing/>}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />{/* 
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;