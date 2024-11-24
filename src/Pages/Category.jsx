import { useState } from "react";
import { Link } from "react-router-dom";
const Category = () => {
    const [activeCategory, setActiveCategory] = useState('accessories');

    const handleMouseEnter = (category) => {
      setActiveCategory(category);
    };
  
    const handleMouseLeave = () => {
      setActiveCategory(null);
    };
  return (
    <>
        <Link to="/categoryproducts">
    <div>
        <div className="flex ">
        <div className="flex flex-col gap-3 pt-5 items-start mr-3 text-md border-l-2 border-gray-200 pl-3">
        <span className={`w-[255px] h-[50px] cursor-pointer flex items-center justify-start pr-3 mt-2 rounded-xl ${activeCategory === 'accessories' ? 'bg-blue-600 text-white' : 'hover:text-white hover:bg-blue-600'}`}
        onMouseEnter={() => handleMouseEnter('accessories')}>
        لوازم  جانبی خودرو</span>
        <span className="w-[255px] h-[50px] hover:text-white hover:bg-blue-600 cursor-pointer flex items-center justify-start pr-3 text-gray-700 rounded-xl"
        onMouseEnter={() => handleMouseEnter('accessories2')}
        >مد و پوشاک</span>
        <span className="w-[255px] h-[50px] hover:text-white hover:bg-blue-600 cursor-pointer flex items-center justify-start pr-3 text-gray-700 rounded-xl " onMouseEnter={() => handleMouseEnter('accessories3')}
        >هدفون های خارجی</span>
        <span className="w-[255px] h-[50px] hover:text-white hover:bg-blue-600 cursor-pointer flex items-center justify-start pr-3 text-gray-700 rounded-xl"  onMouseEnter={() => handleMouseEnter('accessories4')}
        >اسباب بازی کودک</span>
        <span className="w-[255px] h-[50px] hover:text-white hover:bg-blue-600 cursor-pointer flex items-center justify-start pr-3 text-gray-700 rounded-xl" onMouseEnter={() => handleMouseEnter('accessories5')}
        >سوپر مارکت</span>
        </div>
        <div onMouseLeave={handleMouseLeave}>

        
        {activeCategory === 'accessories' && (
        <div className="grid grid-cols-4 gap-x-20 gap-y-10 mt-8 text-gray-500 m-auto pl-10 ">
        
                    <div className="flex flex-col items-center gap-2">
                        
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">لوازم جانبی</span>
                        </div>
                    <ul className="flex flex-col items-center gap-2">
                        <li className="hover:text-blue-600 cursor-pointer">تزیینات اتومبیل</li>
                        <li className="hover:text-blue-600 cursor-pointer">سیستم صوتی</li>
                        <li className="hover:text-blue-600 cursor-pointer">لوازم موتور</li>
                    </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">ابزار برقی</span>
                        </div>
                    <ul className="flex flex-col items-center gap-2">
                        <li className="hover:text-blue-600 cursor-pointer">دریل و پیچ گوشتی برقی</li>
                        <li className="hover:text-blue-600 cursor-pointer">فرز و سنگ رومیزی</li>
                        <li className="hover:text-blue-600 cursor-pointer">موتور برق</li>
                    </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">ابزار غیر برقی</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">ابزار دستی</li>
                            <li className="hover:text-blue-600 cursor-pointer">نردبان</li>
                            <li className="hover:text-blue-600 cursor-pointer">انواع پیچ گوشتی</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">نور و روشنایی</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">لوستر و اباژور</li>
                            <li className="hover:text-blue-600 cursor-pointer">لامپ</li>
                            <li className="hover:text-blue-600 cursor-pointer">چند راهی</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2" >
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">تجهیزات ایمنی</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">کلاه ایمنی</li>
                            <li className="hover:text-blue-600 cursor-pointer">انواع داربست</li>
                            <li className="hover:text-blue-600 cursor-pointer">کفش ایمنی</li>
                        </ul>
                    </div>
                    
                   </div>
                )}
                {activeCategory === 'accessories2' && (
                <div className="grid grid-cols-4 gap-x-32 gap-y-10 mt-8 text-gray-500 m-auto pr-5">      
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">لباس زنانه</span>
                        </div>   
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">مانتو تونیک</li>
                            <li className="hover:text-blue-600 cursor-pointer">سال و روسری</li>
                            <li className="hover:text-blue-600 cursor-pointer">شلوار کتان و لی</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">لباس مردانه</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">شلوار کتان</li>
                            <li className="hover:text-blue-600 cursor-pointer">پیراهن</li>
                            <li className="hover:text-blue-600 cursor-pointer">کفش و کالج</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">زیور آلات</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">ساعت زنانه</li>
                            <li className="hover:text-blue-600 cursor-pointer">ساعت مردانه</li>
                            <li className="hover:text-blue-600 cursor-pointer">جواهرات</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">کفش زنانه</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">کفش اسپورت</li>
                            <li className="hover:text-blue-600 cursor-pointer">کفش رسمی</li>
                            <li className="hover:text-blue-600 cursor-pointer">کفش سندل</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">کفش مردانه</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2"> 
                            <li className="hover:text-blue-600 cursor-pointer">کفش چرم رسمی</li>
                            <li className="hover:text-blue-600 cursor-pointer">کفش اسپورت</li>
                            <li className="hover:text-blue-600 cursor-pointer">کفش کالج</li>
                        </ul>
                    </div>

                </div>
        )}
         {activeCategory === 'accessories3' && (
                     <div className="flex gap-32 items-center pr-8 m-auto  mt-8 text-gray-500">
                       <div className="flex flex-col items-center gap-2">
                       <div className="flex items-center gap-1">
                       <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">هدفون</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">apple</li>
                            <li className="hover:text-blue-600 cursor-pointer">samsung</li>
                            <li className="hover:text-blue-600 cursor-pointer">nokia</li>
                            <li className="hover:text-blue-600 cursor-pointer">razer</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">هندزفری</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">ایرانی</li>
                            <li className="hover:text-blue-600 cursor-pointer">ارزان</li>
                            <li className="hover:text-blue-600 cursor-pointer">جنس اورجینال</li>
                            <li className="hover:text-blue-600 cursor-pointer">ارزان</li>
                        </ul>
                    </div>
                </div>
                )}
                {activeCategory === 'accessories4' && (
                    <div className="flex gap-32 items-center pl-[750px] m-auto pr-8  mt-8 text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">اسباب بازی پسرانه</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">ماشین کنترلی</li>
                            <li className="hover:text-blue-600 cursor-pointer">توپ فوتبال</li>
                            <li className="hover:text-blue-600 cursor-pointer">لگو و خانه سازی</li>
                            <li className="hover:text-blue-600 cursor-pointer">پلی استیشن</li>
                        </ul>
                    </div>
                    </div>
                    )}
                    {activeCategory === 'accessories5' && (
                    <div className="grid grid-cols-4 gap-x-32 m-auto pl-16 pr-5 mt-8 text-gray-500">
                    <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                    <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">جبوبات</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">لوبیا سبز</li>
                            <li className="hover:text-blue-600 cursor-pointer">نخود سبز</li>
                            <li className="hover:text-blue-600 cursor-pointer">ذرت تازه</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                    <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">بیسکویت</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">ساقه طلایی</li>
                            <li className="hover:text-blue-600 cursor-pointer">پتی بور</li>
                            <li className="hover:text-blue-600 cursor-pointer">بیسکویت مادر</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                    <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">نوشیدنی</span>
                        </div>
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">دوغ</li>
                            <li className="hover:text-blue-600 cursor-pointer">نوشابه</li>
                            <li className="hover:text-blue-600 cursor-pointer">ایستک</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                    <span className="flex items-center bg-blue-600 rounded-full w-3 h-1.5 mt-1"></span>
                        <span className="text-gray-700">گوشت</span>
                        </div >
                        <ul className="flex flex-col items-center gap-2">
                            <li className="hover:text-blue-600 cursor-pointer">ماهی</li>
                            <li className="hover:text-blue-600 cursor-pointer">مرغ</li>
                            <li className="hover:text-blue-600 cursor-pointer">اردک</li>
                        </ul>
                    </div>
                    </div>
                    )}
                    
            </div>
            
            </div>
    </div>
    </Link>
    </>
  )
}

export default Category
