import { useEffect, useState } from "react";
function Details(props) {
  console.log(props);
  const [dtailsOfItem, setdtailsOfItem] = useState({ id: "", name: "" });

  useEffect(() => {
    setdtailsOfItem(
      props.products.find((element) => element.id === +props.match.params.id)
    );
  }, []);
 

  return (
    <div>
      <img src={dtailsOfItem.image} />
      <h1>{dtailsOfItem.name}</h1>
      <h1>{dtailsOfItem.price} $</h1>
    </div>
  );
}
export default Details;
