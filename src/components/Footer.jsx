import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="shrink-0 py-4 w-full px-10 flex flex-col gap-4">
      <div className="flex justify-around md:justify-center md:gap-5 text-lg font-bold ">
        <Link className="hover:text-pink-500" to="/cryptoFOMO/about">About</Link>
        <Link className="hover:text-pink-500" to="/cryptoFOMO/contact">Contact</Link>
      </div>
      <p className="text-xs text-center">© 2021 All rights and all lefts reserved. Created by <a className="hover:border-b" href="https://penajoia.com" target="_blank" rel="noreferrer" >Marco Silva</a></p>
    </footer>
  )
}

export default Footer