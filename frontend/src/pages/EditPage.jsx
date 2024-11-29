import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { axiosProduct } from "../utils/axios";

const EditPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: ''
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosProduct.get(`/${id}`);
        setProduct(response.data.data)
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchProduct();
  },[id])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosProduct.put(`${id}`, product);
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setError(error.response ? error.response.data.message : error.message);
      setLoading(false);
    }
  }

  return (
    <div className="pt-16 w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl text-primary font-extrabold uppercase mb-20">Create Product</h2>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-4 shadow-md rounded-md">
          <div className="text-slate-800 mb-3">
            <label htmlFor="name" className="block mb-2 font-semibold text-xl">Name Product</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 rounded-md border-2 focus:outline-none"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-slate-800 mb-3">
            <label htmlFor="price" className="block mb-2 font-semibold text-xl">Price</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 rounded-md border-2 focus:outline-none"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-slate-800 mb-5">
            <label htmlFor="image" className="block mb-2 font-semibold text-xl">Image URL</label>
            <input
              type="url"
              name="image"
              className="w-full p-2 rounded-md border-2 focus:outline-none"
              value={product.image}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="bg-primary text-white px-4 py-2 w-full rounded-md">
            {loading ? "Saving..." : "Save Changes"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default EditPage