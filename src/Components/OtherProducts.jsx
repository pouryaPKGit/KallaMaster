import { FaCircleArrowLeft } from "react-icons/fa6";
import ItemBox from "./ItemsBox";
import { productss } from "../assets/Infoes";

const OtherProducts = () => {
  return (
    
    <div>
        <div className="flex items-center justify-between">
            <span className="text-gray-400 font-bold xs:text-sm md:text-xl">دیگر محصولات <span className="text-blue-600">کالا مستر</span></span>
            <span className="md:w-[178px] md:h-[41px] bg-blue-600 text-white rounded-lg flex items-center gap-2 justify-center cursor-pointer">مشاهده بیشتر <FaCircleArrowLeft /></span>
        </div>
        <div className="flex items-center justify-center">
        <div className="flex flex-wrap gap-x-20 gap-y-10 m-auto justify-center  pt-10">
        {productss.slice(0,8).map((item, index) => (
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
    </div>
  )
}

export default OtherProducts
