import { useState } from "react"
import { axiosProduct } from "../utils/axios";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      name,
      price: parseFloat(price),
      image
    }

    try {
      await axiosProduct.post('/', productData);
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error(error.message);
      setError(error.response ? error.response.data.message : error.message); // Ambil pesan error dari respons
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="text-slate-800 mb-3">
            <label htmlFor="price" className="block mb-2 font-semibold text-xl">Price</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 rounded-md border-2 focus:outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="text-slate-800 mb-5">
            <label htmlFor="image" className="block mb-2 font-semibold text-xl">Image URL</label>
            <input
              type="url"
              name="image"
              className="w-full p-2 rounded-md border-2 focus:outline-none"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-primary text-white px-4 py-2 w-full rounded-md" disabled={loading}>
            {loading ? "Adding..." : "Add Product"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default CreatePage