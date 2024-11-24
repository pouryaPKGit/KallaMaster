import { Link } from 'react-router-dom';
const ItemsBox = ({img,text,oldprice,newprice,offs,id, onClick}) => {
  return (
    <Link to={`/product/${id}`}>
    <div onClick={onClick}>
      <div className="w-[240px] h-[356px] bg-white rounded-xl cursor-pointer">
        <div className="flex items-center justify-center mx-auto ">
        <img src={img} alt="" className="w-[188px] h-[188px] mt-7" />
        </div>
        <div>
            <p className="text-sm text-gray-700 p-3">{text}</p>
        </div>
        <div className="flex justify-between px-4">
            <div className="flex flex-col items-start">
                <span className="text-sm text-gray-400"><del>{oldprice}</del></span>
                <span className="text-sm">{newprice}</span>
            </div>
            <div className="mt-3">
                <span className="border border-blue-700 rounded-2xl text-sm px-2 font-[600] py-1 text-blue-500">{offs}%</span>
            </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ItemsBox
