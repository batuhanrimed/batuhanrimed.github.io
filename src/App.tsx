import { NavLink, Outlet } from "react-router-dom";
import style from "./App.module.scss";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className={style.appContainer}>
      <Profile />
      <div className={style.content}>
        <div className={style.card}>
          <Outlet />
        </div>
      </div>
      <div className={style.navigation}>
        <div className={style.card}>
          <NavLink
            to="/hakkimda"
            className={({ isActive }) => (isActive ? style.active : "")}
            title="Hakkımda"
          >
            <i className="pi pi-id-card"></i>
          </NavLink>
          <NavLink
            to="/calismalarim"
            className={({ isActive }) => (isActive ? style.active : "")}
            title="Hakkımda"
          >
            <i className="pi pi-briefcase"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
