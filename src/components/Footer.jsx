import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>Footer: Social and copyright
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Footer