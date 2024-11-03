import { useState } from "react";
import ItemBox from "./ItemsBox";
import { productss } from "../assets/Infoes";

const ItemAllBoxes = () => {
  const [selectedCategory, setSelectedCategory] = useState("جاروبرقی");

  const filteredProducts = productss.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="py-10">
      <div className="flex flex-wrap items-center gap-3 my-10 pr-3">
        <button
          className={`text-gray-600 text-md rounded-lg p-1.5 ${
            selectedCategory === "جاروبرقی" ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("جاروبرقی")}
        >
          جاروبرقی
        </button>
        <button
          className={`text-gray-600 text-md rounded-lg p-1.5 ${
            selectedCategory === "موبایل" ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("موبایل")}
        >
          موبایل
        </button>
        <button
          className={`text-gray-600 text-md rounded-lg p-1.5 ${
            selectedCategory === "هدفون" ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("هدفون")}
        >
          هدفون
        </button>
      </div>

      <div className="flex flex-wrap gap-x-10 justify-center m-auto gap-y-5">
        {filteredProducts.map((item, index) => (
          <ItemBox
            key={index}
            id={item.id}
            text={item.text}
            oldprice={item.oldprice}
            newprice={item.newprice}
            offs={item.offs}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemAllBoxes;
