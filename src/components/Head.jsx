import { Link } from "react-router-dom"

function Head() {
  return (
    <div className="py-5">
      <Link to="/">
        <h1 className="text-4xl font-black text-glow ">cryptoFOMO</h1>
      </Link>
    </div>
  )
}

export default Head