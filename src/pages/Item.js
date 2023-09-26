import { useParams, useLoaderData } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const resp = useLoaderData();
  console.log(resp);

  return (
    <div>
      {id}.{resp.title}
    </div>
  );
}

export const fetchProductDetails = async ({ params }) => {
  const response = await fetch("https://dummyjson.com/products/" + params.id);

  if (!response.ok) {
    throw Error("Could not find this specific product!");
  }

  const data = await response.json();

  return data;
};

export default Item;
