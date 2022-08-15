import "./App.css";
import CacheColorComponents from "./components/cacheColorComponents";
import LoginComponents from "./components/LoginComponents";
import ProfileComponents from "./components/ProfileComponents";

function App() {
  return (
    <div className="App">
      <ProfileComponents />
      <LoginComponents />
      <CacheColorComponents />
    </div>
  );
}

export default App;
