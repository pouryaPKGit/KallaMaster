import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiBellAlert } from "react-icons/hi2";
import { HiShoppingBag } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { RxDropdownMenu } from "react-icons/rx";
import { AiOutlineClose } from 'react-icons/ai'; 
const  RightMenu = () => {
  const navigate = useNavigate();
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);

  const toggleUserMenu = () => {
    setIsOpenUserMenu(!isOpenUserMenu);
  };

  const closeUserMenu = () => {
    setIsOpenUserMenu(false);
  };
  
  const { user, logoutUser } = useContext(UserContext);

  const handleLogout = () => {
    navigate("/");
    logoutUser();
  
  };
  const [openMenu, setOpenMenu] = useState({});
  
  const toggleMenu = (menu) => {
    setOpenMenu((prevOpenMenu) => ({
      ...prevOpenMenu,
      [menu]: !prevOpenMenu[menu],
    }));
  };
  const handleClick = (path) => {
    window.location.href = path; 
    
  };
  return (
    
    <div className="bg-white max-w-[400px] h-screen  2lg:hidden">
      
      <div className="flex flex-col gap-5 mt-5 sm:mt-16 text-lg text-gray-700">
      {user ? (
  <div
    onClick={toggleUserMenu}
    className="2sm:hidden flex gap-2 items-center cursor-pointer sm:-mt-10"
  >
    <FaUserCircle className="text-blue-600 cursor-pointer text-5xl" />
    <RxDropdownMenu className="text-2xl mt-2 cursor-pointer" />
    {isOpenUserMenu && (
      <div className="absolute top-8 right-12 mt-2 w-40 bg-white shadow-lg py-6 px-5 rounded-md z-20">
        <div className="flex justify-between items-center">
          <AiOutlineClose
            className="text-sm cursor-pointer"
            onClick={closeUserMenu}
          />
        </div>
        <div
          className="flex items-center pr-2 cursor-pointer gap-1 rounded-md py-0.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white"
          onClick={() => {
            handleClick("/account-details");
            closeUserMenu();
          }}
        >
          <HiUser />
          <button className="text-[12px] flex items-center justify-center">
            جزییات حساب
          </button>
        </div>
        
        <div
          className="flex items-center pr-4 cursor-pointer gap-2 rounded-md py-0.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white"
          onClick={() => {
            handleClick("/personal");
            closeUserMenu();
          }}
        >
          <BsChatSquareText />
          <button className="text-[12px] flex items-center justify-center">
            درباره ما
          </button>
        </div>
        
        <Link to="/wallet">
        <div
          className="flex items-center pr-4 cursor-pointer gap-2 rounded-md py-0.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white"
          onClick={() => {
            handleClick("/wallet");
            closeUserMenu();
          }}
          
        >
          <IoIosWallet />
          <button className="text-[12px] flex items-center justify-center">
            کیف پول
          </button>
        </div>
          </Link>
        <div
          className="flex items-center pr-4 cursor-pointer gap-2 rounded-md py-0.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white"
          onClick={() => {
            handleLogout();
            closeUserMenu();
          }}
        >
          <FaPowerOff />
          <button className="text-[12px] flex items-center justify-center">
            خروج
          </button>
        </div>
      </div>
    )}
  </div>
) : (
  <Link to="/login">
    <div className="2sm:hidden  items-center mr-2 cursor-pointer">
      <FaUserCircle className="text-5xl mt-2 text-blue-500  rounded-full" />
    </div>
  </Link>
)}
        <hr className="flex 2sm:hidden" />
        <br className="hidden 2sm:flex sm:hidden" />
        <div className="flex items-center justify-between mr-1" >
          <Link to="/"><span>صفحه اصلی</span></Link>
          <div className="ml-3 text-xl mt-5 cursor-pointer"> <FaHome  className="text-white bg-blue-400 rounded-md p-1 h-6 w-6"/></div>
        </div>
        <div className="flex items-center justify-between mr-1">
          <Link to="/personal"><span>درباره ما</span></Link>
          <div className="ml-3 text-xl cursor-pointer"> <FaUserLock className="text-white bg-blue-400 rounded-md p-1 h-6 w-6"/></div>
        </div>
        <div className="flex items-center justify-between  mr-1">
        <Link to="/categoryproducts">
          <span>دسته بندی ها</span>
          </Link>
          <button
            onClick={() => toggleMenu('categories')}
            className="text-3xl text-blue-500 ml-3"
          >
            {openMenu['categories'] ? '-' : '+'}
          </button>
        </div>
        {openMenu['categories'] && (
          <div className="text-lg text-white bg-blue-400 pl-3 pr-2">
            <ul className="flex flex-col gap-2">
             
              <div className="flex items-center justify-between">
                <li>لوازم جانبی خودرو</li>
                <button
                  onClick={() => toggleMenu('automobile')}
                  className="text-2xl text-white"
                >
                  {openMenu['automobile'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['automobile'] && (
                <ul className="flex flex-col">
                 
                  <div className="flex items-center justify-between">
                    <li>ابزار برقی</li>
                    <button
                      onClick={() => toggleMenu('powerTools')}
                      className="text-2xl"
                    >
                      {openMenu['powerTools'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['powerTools'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>پیچ گوشتی و دریل</li>
                      <li>فرز و سنگ رو میزی </li>
                      <li>موتور برق </li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>ابزار غیر برقی</li>
                    <button
                      onClick={() => toggleMenu('nonPowerTools')}
                      className="text-2xl"
                    >
                      {openMenu['nonPowerTools'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['nonPowerTools'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>آچار</li>
                      <li>چکش</li>
                      <li>پیچ گوشتی</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>نور و روشنایی</li>
                    <button
                      onClick={() => toggleMenu('lights')}
                      className="text-2xl"
                    >
                      {openMenu['lights'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['lights'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>لامپ</li>
                      <li>چند راهی</li>
                      <li>آباژور</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>تجهیزات ایمنی</li>
                    <button
                      onClick={() => toggleMenu('securetools')}
                      className="text-2xl"
                    >
                      {openMenu['securetools'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['securetools'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>کلاه</li>
                      <li>دستکش</li>
                      <li>کفش</li>
                    </ul>
                  )}
                </ul>
              )}

              
              <div className="flex items-center justify-between">
                <li>مد و پوشاک</li>
                <button
                  onClick={() => toggleMenu('fashion')}
                  className="text-2xl"
                >
                  {openMenu['fashion'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['fashion'] && (
                <ul className="flex flex-col ">
                 
                  <div className="flex items-center justify-between">
                    <li>لباس زنانه</li>
                    <button
                      onClick={() => toggleMenu('woman')}
                      className="text-2xl"
                    >
                      {openMenu['woman'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['woman'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>مانتو</li>
                      <li>شلوار</li>
                      <li>روسری</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>لباس مردانه</li>
                    <button
                      onClick={() => toggleMenu('mans')}
                      className="text-2xl"
                    >
                      {openMenu['mans'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['mans'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>کتان</li>
                      <li>کالج</li>
                      <li>پیراهن</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>زیور آلات</li>
                    <button
                      onClick={() => toggleMenu('goldens')}
                      className="text-2xl"
                    >
                      {openMenu['goldens'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['goldens'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>ساعت</li>
                      <li>دستبند</li>
                      <li>گردنبند</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>کفش زنانه</li>
                    <button
                      onClick={() => toggleMenu('boots')}
                      className="text-2xl"
                    >
                      {openMenu['boots'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['boots'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>سندل</li>
                      <li>پاشنه بلند</li>
                      <li>بوت</li>
                    </ul>
                  )}
                </ul>
              )}
              <div className="flex items-center justify-between">
                <li>هدفون های خارجی</li>
                <button
                  onClick={() => toggleMenu('headphones')}
                  className="text-2xl"
                >
                  {openMenu['headphones'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['headphones'] && (
                <ul className="flex flex-col ">
                 
                  <div className="flex items-center justify-between">
                    <li>هدفون</li>
                    <button
                      onClick={() => toggleMenu('headphoness')}
                      className="text-2xl"
                    >
                      {openMenu['headphoness'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['headphoness'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>ریزر</li>
                      <li>سونی</li>
                      <li>سامسونگ</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>هندز فری</li>
                    <button
                      onClick={() => toggleMenu('handsfery')}
                      className="text-2xl"
                    >
                      {openMenu['handsfery'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['handsfery'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>سامسونگ</li>
                      <li>اپل</li>
                      <li>هوآووی</li>
                    </ul>
                  )}
                </ul>
              )}
              <div className="flex items-center justify-between">
                <li>اسباب بازی</li>
                <button
                  onClick={() => toggleMenu('tooy')}
                  className="text-2xl"
                >
                  {openMenu['tooy'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['tooy'] && (
                <ul className="flex flex-col ">
                 
                  <div className="flex items-center justify-between">
                    <li>توپ ها</li>
                    <button
                      onClick={() => toggleMenu('balls')}
                      className="text-2xl"
                    >
                      {openMenu['balls'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['balls'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>والیبال</li>
                      <li>بسکت بال</li>
                      <li>فوتبال</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>ماشین ها</li>
                    <button
                      onClick={() => toggleMenu('cars')}
                      className="text-2xl"
                    >
                      {openMenu['cars'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['cars'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>کنترلی</li>
                      <li>جرثقیل</li>
                      <li>کامیون</li>
                    </ul>
                  )}
                </ul>
              )}
              <div className="flex items-center justify-between">
                <li>سوپر مارکت</li>
                <button
                  onClick={() => toggleMenu('market')}
                  className="text-2xl"
                >
                  {openMenu['market'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['market'] && (
                <ul className="flex flex-col ">
                 
                  <div className="flex items-center justify-between">
                    <li>حبوبات</li>
                    <button
                      onClick={() => toggleMenu('beens')}
                      className="text-2xl"
                    >
                      {openMenu['beens'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['beens'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>عدس</li>
                      <li>لپه</li>
                      <li>لوبیا</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>نوشیدنی ها</li>
                    <button
                      onClick={() => toggleMenu('drinks')}
                      className="text-2xl"
                    >
                      {openMenu['drinks'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['drinks'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>دوغ</li>
                      <li>نوشابه</li>
                      <li>اب معدنی</li>
                    </ul>
                  )}
                  <div className="flex items-center justify-between">
                    <li>گوشت</li>
                    <button
                      onClick={() => toggleMenu('meats')}
                      className="text-2xl"
                    >
                      {openMenu['meats'] ? '-' : '+'}
                    </button>
                  </div>
                  {openMenu['meats'] && (
                    <ul className="flex flex-col text-[15px] text-slate-100 gap-2">
                      <li>گاوی</li>
                      <li>گوسفندی</li>
                      <li>ماهی</li>
                    </ul>
                  )}
                </ul>
              )}
             
            </ul>
          </div>
        )}


    <div className="flex items-center justify-between ">
      <Link to="/homeproducts">
          <span>وسایل خانه</span>
          </Link>
          <button
            onClick={() => toggleMenu('hometools')}
            className="text-3xl text-blue-500 pl-3"
          >
            {openMenu['hometools'] ? '-' : '+'}
          </button>
        </div>
        {openMenu['hometools'] && (
          <div className="bg-blue-400 text-white pl-3 pr-2 text-lg">
            <ul className="flex flex-col gap-5">
             
              <div className="flex items-center justify-between">
                <li>دکوراسیون</li>
                <button
                  onClick={() => toggleMenu('decorasion')}
                  className="text-2xl"
                >
                  {openMenu['decorasion'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['decorasion'] && (
                <ul className="flex flex-col ml-4"> 
                  <div className="flex flex-col gap-2 text-slate-100">
                    <li>کتابخانه</li>
                    <li>کاغذ دیواری</li>
                    <li>لوستر</li>
                    <li>اباژور</li>
                  </div>                 
                </ul>
              )} 
              <div className="flex items-center justify-between">
                <li>وسایل نظافتی</li>
                <button
                  onClick={() => toggleMenu('cleaner')}
                  className="text-2xl"
                >
                  {openMenu['cleaner'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['cleaner'] && (
                <ul className="flex flex-col ml-4"> 
                  <div className="flex flex-col gap-2 text-slate-100">
                    <li>جاروبرقی</li>
                    <li>طی دستی</li>
                    <li>سطل آب</li>
                    <li>شیشه شور</li>
                  </div>                 
                </ul>
              )} 
              <div className="flex items-center justify-between">
                <li>وسایل آشپزخانه</li>
                <button
                  onClick={() => toggleMenu('kitchentoold')}
                  className="text-2xl"
                >
                  {openMenu['kitchentoold'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['kitchentoold'] && (
                <ul className="flex flex-col ml-4"> 
                  <div className="flex flex-col gap-2 text-slate-100">
                    <li>گاز</li>
                    <li>فر رومیزی</li>
                    <li>توستر</li>
                    <li>یخچال</li>
                  </div>                 
                </ul>
              )} 
              <div className="flex items-center justify-between">
                <li>صوتی تصویری</li>
                <button
                  onClick={() => toggleMenu('WS')}
                  className="text-2xl"
                >
                  {openMenu['WS'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['WS'] && (
                <ul className="flex flex-col ml-4"> 
                  <div className="flex flex-col gap-2 text-slate-100">
                    <li>تلویزیون</li>
                    <li>دی وی دی</li>
                    <li>دیجیتال</li>
                    <li>ال سی دی</li>
                  </div>                 
                </ul>
              )} 
              <div className="flex items-center justify-between">
                <li>وسایل برقی</li>
                <button
                  onClick={() => toggleMenu('Power')}
                  className="text-2xl"
                >
                  {openMenu['Power'] ? '-' : '+'}
                </button>
              </div>
              {openMenu['Power'] && (
                <ul className="flex flex-col ml-4"> 
                  <div className="flex flex-col gap-2 text-slate-100">
                    <li>یخچال</li>
                    <li>جاروبرقی</li>
                    <li>فر دیواری</li>
                    <li>کولر گازی</li>
                  </div>                 
                </ul>
              )} 
              
            </ul>
          </div>
        )}
        <div className="flex items-center justify-between mb-2 ">
          <Link to="/digitalproducts">
          <span>وسایل دیجیتالی</span>
          </Link>
          <button
            onClick={() => toggleMenu('diGitals')}
            className="text-3xl text-blue-500 pl-3"
          >
            {openMenu['diGitals'] ? '-' : '+'}
          </button>
        </div>
        {openMenu['diGitals'] && (
          <div className="">
            <ul className="flex flex-col gap-2 bg-blue-400 text-white pr-2">
             
              <li>موبایل</li>
              <li>لپ تاپ</li>
              <li>تبلت</li>
              
            </ul>
          </div>
        )}
        <hr className="flex 2sm:hidden"/>
        <div className="flex items-center gap-2 text-3xl 2sm:hidden mr-2">
        <Link to="/cart"><HiShoppingBag className="text-blue-500 bg-blue-200 h-8 rounded-md w-8 p-1 cursor-pointer border-dashed border border-blue-500" /></Link>
        <HiBellAlert className="text-orange-300 bg-blue-200 h-8 rounded-md w-8 p-1 cursor-pointer border-dashed border border-yellow-500" />
        <Link to="/likes"><FaHeart className="text-2xl text-red-500 bg-blue-200 h-8 rounded-md w-8 p-1 cursor-pointer border-dashed border border-red-500"/></Link>
        </div>
        <hr className="flex 2sm:hidden" />
      </div>
    </div>
  );
};

export default RightMenu;
