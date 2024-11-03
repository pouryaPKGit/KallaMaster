import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { MdSupportAgent } from "react-icons/md";
import {Link} from "react-router-dom"
const MainFooterSection = () => {
  return (
    <>
    <div className="bg-[#3b4359] min-h-[100px] text-white px-7">
      <div className="flex flex-wrap items-center justify-between gap-y-5 pt-8 px-5">
            <div className="text-3xl cursor-pointer font-bold"><Link to="/"><p className="text-white">کالا<span className="text-blue-600 mr-0.5">مستر</span></p></Link></div>
            <div className="flex flex-wrap items-center gap-5 text-sm">
                <span>شماره تماس : ۰۲۱-۰۰۰-۰۰۰</span> |
                <span>هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم</span> |
                <span>info@KallaMaster.com</span>
            </div>
            <div className="flex items-center gap-5 text-3xl">
            <FaTelegram className="cursor-pointer hover:text-blue-500" />
            <IoLogoWhatsapp className="cursor-pointer hover:text-green-600" />
            <TiSocialYoutubeCircular className="text-4xl cursor-pointer hover:text-red-600" />
            </div>
      </div>
    </div>
    <div className="bg-[#2c3346] min-h-[60px] py-10">
      <div className="flex flex-wrap gap-y-5  items-center justify-between px-10">
        <span className="text-white text-lg ">اپ های مارو دانلود کنید</span>
        <div className="flex items-center gap-3">
          <img src="/Images/FooterSection/google-play.png" className="w-[150px] h-[44px] hover:opacity-70 rounded-md cursor-pointer" alt="" />
          <img src="/Images/FooterSection/myket.png" className="w-[150px] h-[44px] rounded-md hover:opacity-70 cursor-pointer" alt="" />
        </div>
      </div>
    </div>  
    <div className="bg-[#3b4359] min-h-[280px] pt-10">
      <div className="flex flex-wrap gap-y-10 gap-x-5 items-center justify-between px-7">
        <div className="flex flex-col items-start gap-3 text-white">
        <span className="text-xl">درباره ما</span>
        <p className="max-w-[300px] text-sm leading-[30px]">کالا مستر یک مجموعه بزرگ با بیش از 520 پرسنل ار سال 87 خدمات خودرا آغاز کرده و تا کنون در 7 نقطه جهان تنوانسته خود را گسترش دهد</p>
        <button className="bg-blue-600 text-white rounded-lg text-md p-2 mt-3 flex items-center gap-3 hover:opacity-70"> <MdSupportAgent className="text-2xl" /> پشتیبانی سریع </button>
        </div>
        <div className="flex flex-col items-start gap-3 text-white text-sm">
        <span className="text-xl">منو های کاربردی</span>
        <Link to="/homeproducts"><span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>لوازم خانگی</span></Link>
        <Link to="/digitalproducts"> <span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>لوازم دیجیتال</span></Link>
        <Link to="/homeproducts"> <span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>دسته بندی ها</span></Link>
        <Link to="/personal"> <span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>درباره ما</span></Link>
        
        </div>
        <div className="flex flex-col items-start gap-3 text-white text-sm">
        <span className="text-xl">منو های کاربردی</span>
        <Link to="/homeproducts"><span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>لوازم خانگی</span></Link>
        <Link to="/digitalproducts"> <span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>لوازم دیجیتال</span></Link>
        <Link to="/homeproducts"> <span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>دسته بندی ها</span></Link>
        <Link to="/personal"> <span className="cursor-pointer hover:text-blue-600 hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>درباره ما</span></Link>
        
        </div>
        
        <div className="flex items-start gap-3">
          <div className="w-[132px] h-[147px] bg-white rounded-2xl shadow-md cursor-pointer">
        <img src="/Images/FooterSection/samandehi-1.png" className="w-[102px] hover:opacity-70 h-[117px] flex items-center justify-center m-auto pt-2" alt="" />
        </div>
        <div className="w-[132px] h-[147px] bg-white rounded-2xl shadow-md cursor-pointer">
        <img src="/Images/FooterSection/enamad.png" className="w-[102px] hover:opacity-70 h-[117px] flex items-center justify-center m-auto pt-2"  alt="" />
        </div>
        </div>
      </div>
    </div>
    <div className="bg-[#2c3346] h-[60px] text-md text-white flex items-center justify-center">
        <p className="text-blue-500">| Developed By : Mr Pourkhani |</p>
    </div>
    </>
  )
}

export default MainFooterSection
