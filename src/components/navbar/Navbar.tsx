import { GrLogout } from "react-icons/gr";
import "./Navbar.scss";
import { logOut } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout =async() => {
    await logOut();
    await navigate("/")
    
  };
  return (
    <div className="navbar">
      <div className="log">
        <img src="logo.svg" alt="" />
        <span>profitwise.tech</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
        <button onClick={handleLogout}><GrLogout color="white" className="text-lg" size="20px"/> Logout</button>
      </div>
    </div>
  )
}

export default Navbar
