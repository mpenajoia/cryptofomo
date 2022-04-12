import { Link } from "react-router-dom"

function Head() {
  return (
    <div className="py-5">
      <Link to="/">
        <h1 className="text-4xl font-black text-glow scale-100 duration-100 ease-in-out hover:scale-105 ">cryptoFOMO</h1>
      </Link>
    </div>
  )
}

export default Head