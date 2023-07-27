import "./Navbar.scss"

const Navbar = () => {
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
      </div>
    </div>
  )
}

export default Navbar
