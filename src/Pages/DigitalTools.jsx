import { Link } from "react-router-dom"
const DigitalTools = () => {
  return (
    <Link to="/digitalproducts">
    <div className="">
      <div className="text-gray-600 flex flex-col items-start gap-4 mr-10">
        <div className="flex items-center gap-1"> 
      <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1"></span>
        <span className="cursor-pointer hover:text-blue-600">گوشی موبایل</span>
        </div>
        <div className="flex items-center gap-1">
        <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1"></span>
        <span className="cursor-pointer hover:text-blue-600">تبلت ایپد</span>
        </div>
        <div className="flex items-center gap-1">
        <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1"></span>
        <span className="cursor-pointer hover:text-blue-600">لپتاپ مانیتور</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default DigitalTools
