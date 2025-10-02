import "./App.scss";
import { Outlet } from "react-router-dom";
import HeaderComponent from "Components/Header/HeaderComponent";
import FooterComponent from "Components/FooterComponent";

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>

      <Outlet />

      <FooterComponent />
    </div>
  );
}

export default App;
