import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="shrink-0 py-4 text-sm">
      Footer: Social and copyright
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </footer>
  )
}

export default Footer