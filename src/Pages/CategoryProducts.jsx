import {productss} from "../assets/Infoes"
import ItemBox from "../Components/ItemsBox"
import MainFooterSection from "../Components/MainFooterSection"
const CategoryProducts = () => {
  return (
    <>
    <div className="my-16">
       <div className="flex flex-wrap gap-x-10 justify-center m-auto gap-y-5">
        {productss.slice().map((item, index) => (
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
    <MainFooterSection/>
    </>
  )
}

export default CategoryProducts
