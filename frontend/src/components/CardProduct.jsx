import PropTypes from 'prop-types'
import { FaTrash } from "react-icons/fa"
import { FaPenToSquare } from "react-icons/fa6"
import { Link } from "react-router-dom"
const CardProduct = (props) => {
  return (
    <div className="w-[250px] bg-white rounded-xl flex flex-col justify-center overflow-hidden shadow-md">
      <div className="h-36">
        <img
          src={props.image}
          alt="Card Preview"
          className="mb-3 object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col px-4 py-2 *:block">
        <span className="text-lg font-semibold text-primary">{props.productName}</span>
        <span className="text-slate-600 mb-4">Rp. {props.price}</span>
        <div className="flex items-center">
          <Link to={`${props.id}/edit`} className="inline-flex mr-2 p-2 rounded-md bg-yellow-600">
            <FaPenToSquare className="text-lg text-white" />
          </Link>
          <button onClick={props.onDelete} className="p-2 rounded-md bg-red-600">
            <FaTrash className="text-lg text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

CardProduct.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default CardProduct