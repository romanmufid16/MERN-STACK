import { useEffect, useState } from "react";
import CardProduct from "../components/CardProduct"
import { axiosProduct } from "../utils/axios"

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axiosProduct.get('/');
      setLoading(false);
      setProducts(response.data.data);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000)
  }, []);

  return (
    <div className="pt-16 w-full flex flex-col items-center justify-center">
      <h2 className="text-3xl text-primary font-extrabold uppercase mb-20">Current Products</h2>
      {loading ? (
        <div className="text-xl text-primary">Loading...</div> // Menampilkan loading saat data sedang dimuat
      ) : (
        <div className="flex gap-4 w-full px-48 flex-wrap">
          {products.map((item) => (
            <CardProduct
              key={item._id}
              productName={item.name}
              price={`${item.price}`}
              id={item._id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage