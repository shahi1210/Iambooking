import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
    <div className="navContainer">
    <span className="logo">RS-Booking</span>
    <div className="navItems">
      <button className="navButton">Register</button>
      <button className="navButton">Login</button>
    </div>
  </div>
</div>
)
}