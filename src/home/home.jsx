import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile";

/**
 * The main idea/Objective of this project is to learn how to integrate Redux tool kit in react projects. Such as:
 * How to create actions,
 * How to create a global store,
 * How to create the reducer,
 * How to use the useDispatch and useSelector Hook to connect react redux project.
 * Redux is simply a global state management library like context. So the idea behind redux is to keep or store your state in one location so you can use it anytime you want. For the redux , the idea is to create slices for each page and compo.
 */

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  console.log(products, "products");
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
