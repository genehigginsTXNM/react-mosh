import React, { useEffect, useState } from "react";

const Productlist = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    // Fetch products from an API or perform any other side effects here
    // For example, you can use fetch or axios to get data from a server
    // and then update the state with setProducts.
    console.log("fetcing products in", category);
    setProducts(["clothing", "shoes", "bags"]);
  }, [category]);

  return <div>Productlist</div>;
};

export default Productlist;
