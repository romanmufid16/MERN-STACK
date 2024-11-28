import { FaBasketShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="w-full bg-primary p-4 text-white shadow-md">
      <div className=" flex justify-between items-center mx-32">
        <Link to="/" className="flex items-center gap-4">
          <h1 className="text-2xl font-bold uppercase">Product Store</h1>
          <FaBasketShopping className="size-7"/>
        </Link>
        <Link to='/create' className="bg-secondary px-5 py-2 rounded-md">
          <span className="text-lg text-primary uppercase font-bold">Create</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar