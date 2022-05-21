import { areArraysEqual } from "@mui/base";
import React, { useState, useEffect } from "react";
import { getAll } from "../api/shopAPI";
import { popularProducts } from "../data/dummy_data";
import { ProductItem } from "./mini";

const ProductsSection = ({ categoryParam, filtersParam, sortParma }) => {
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getAll(
          "products",
          categoryParam
            ? {
                category: categoryParam,
              }
            : {}
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [categoryParam]);

  useEffect(() => {
    categoryParam
      ? setFiltredProducts(
          products.filter((item) =>{
            return Object.entries(filtersParam).every(([key, value]) =>{
              return item[key].includes(value)
            })
          })
        )
      : setFiltredProducts(products);
  }, [products, categoryParam, filtersParam]);

  useEffect(() => {
    switch(sortParma){
      case "asc":
        setFiltredProducts((prev)=> [...prev].sort((a,b)=>a.price - b.price))
      break;
      case "desc":
        setFiltredProducts((prev)=> [...prev].sort((a,b)=>b.price - a.price))
      break;
      default:
        setFiltredProducts((prev)=> [...prev].sort((a,b)=>a.createdAt - b.createdAt))
    }
  }, [sortParma])

  return (
    <div className="flex p-5 flex-wrap justify-center tablet:justify-between">
      {filtredProducts.map((item) => {
        return <ProductItem key={item._id} item={item} />;
      })}
    </div>
  );
};

export default ProductsSection;
