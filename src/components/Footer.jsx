import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="shrink-0 py-4 w-full px-10 flex flex-col gap-4">
      <div className="flex justify-around text-lg font-bold ">
        <Link className="hover:text-pink-500" to="/about">About</Link>
        <Link className="hover:text-pink-500" to="/contact">Contact</Link>
      </div>
      <p className="text-xs text-center">© 2021 All rights and all lefts reserved.</p>
    </footer>
  )
}

export default Footer