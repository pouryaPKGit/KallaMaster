import { Link } from "react-router-dom"
const HomeTools = () => {
  return (
    <Link to="/homeproducts">
    <div className="">
       <div className="flex justify-between items-center pt-14 px-16">

                <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1"></span>
                    <span className="text-gray-700">دکوراسیون</span>
                    </div>
                    <ul className="text-gray-500 flex flex-col gap-3 items-center">
                        <li className="hover:text-blue-600 cursor-pointer">آباژور</li>
                        <li className="hover:text-blue-600 cursor-pointer">تابلو</li>
                        <li className="hover:text-blue-600 cursor-pointer">گل و گیاه</li>
                        <li className="hover:text-blue-600 cursor-pointer">مجسمه</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-2"> 
                    <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1 mt-1"></span>
                    <span className="text-gray-700">وسایل نظافتی</span></div>
                    
                    <ul className="text-gray-500 flex flex-col gap-3 items-center">
                        <li className="hover:text-blue-600 cursor-pointer">جارو برقی</li>
                        <li className="hover:text-blue-600 cursor-pointer">شیشه پاک کن</li>
                        <li className="hover:text-blue-600 cursor-pointer">طی دستی</li>
                        <li className="hover:text-blue-600 cursor-pointer">سطل زباله</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-2">
                    <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1 mt-1"></span>
                    <span className="text-gray-700">وسایل آشپز خانه</span>
                    </div>
                    
                    <ul className="text-gray-500 flex flex-col items-center gap-3">
                        <li className="hover:text-blue-600 cursor-pointer">گاز رومیزی</li>
                        <li className="hover:text-blue-600 cursor-pointer">فر دیواری</li>
                        <li className="hover:text-blue-600 cursor-pointer">مایکروویو</li>
                        <li className="hover:text-blue-600 cursor-pointer">توستر</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-2">
                    <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1 mt-1"></span>
                    <span className="text-gray-700">صوتی تصویری</span>
                    </div>
                    
                    <ul className="text-gray-500 flex flex-col items-center gap-3">
                        <li className="hover:text-blue-600 cursor-pointer">تلوزیون</li>
                        <li className="hover:text-blue-600 cursor-pointer">باند اسپیکر</li>
                        <li className="hover:text-blue-600 cursor-pointer">گیرنده دیجیتال</li>
                        <li className="hover:text-blue-600 cursor-pointer">دی وی دی</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex items-center gap-2">
                    <span className="flex items-center bg-blue-600 rounded-full w-2.5 h-1 mt-1"></span>
                    <span className="text-gray-700">لوازم برقی</span>
                    </div>
                    <ul className="text-gray-500 flex flex-col items-center gap-3">
                        <li className="hover:text-blue-600 cursor-pointer">یخچال</li>
                        <li className="hover:text-blue-600 cursor-pointer">لباس شویی</li>
                        <li className="hover:text-blue-600 cursor-pointer">ماشین ظرف شویی</li>
                        <li className="hover:text-blue-600 cursor-pointer">فر رو میزی</li>
                    </ul>
                </div>
            </div>

    </div>
    </Link>
  )
}

export default HomeTools
