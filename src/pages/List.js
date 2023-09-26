import { useLoaderData, NavLink } from "react-router-dom";

function List() {
  const resp = useLoaderData();

  return (
    <div>
      <h3>Our products</h3>
      {resp.products.map((product) => (
        <div key={product.id}>
          <NavLink to={product.id.toString()}>
            {product.id}.{product.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return data;
};

export default List;
