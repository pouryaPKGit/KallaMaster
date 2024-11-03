import { IoIosArrowDown } from "react-icons/io";
import { useState, useEffect } from "react";
import Category from "../Pages/Category";
import HomeTools from "../Pages/HomeTools";
import DigitalTools from "../Pages/DigitalTools";
import { PiBag } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { TfiBell } from "react-icons/tfi";
import { useContext } from "react";
import { UserContext } from "../Context/Context";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import RightMenu from "../Components/RightMenu";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const { user, logoutUser } = useContext(UserContext);
  const {  cart,likes } = useContext(UserContext);
  const handleLogout = () => {
    navigate("/");
    logoutUser();
    setIsOpenUserMenu(false);
  };

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isHomeToolsOpen, setIsHomeToolsOpen] = useState(false);
  const [isDigitalToolsOpen, setIsDigitalToolsOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu")) {
        setIsCategoryOpen(false);
        setIsHomeToolsOpen(false);
        setIsDigitalToolsOpen(false);
        setIsOpenUserMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white h-[55px] flex items-center justify-between mx-auto xs:-mt-7 2sm:mt-8 relative">
      <div className="2lg:flex hidden gap-7 text-[15px] text-gray-700 w-[60%] 2lg:mr-28">
        <div className="cursor-pointer">
          <Link to="/"><span>صفحه اصلی</span></Link>
        </div>
        
          <div
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="relative flex items-center gap-2 cursor-pointer menu"
          >
            <span>دسته بندی ها</span>
            <IoIosArrowDown className="text-[10px]" />
            {isCategoryOpen && (
              <div className="absolute bg-white w-[1200px] top-full -left-[1050px] min-h-[400px] rounded-2xl shadow-sm z-50">
                <Category />
              </div>
            )}
          </div>
        
        
          <div
            onClick={() => setIsHomeToolsOpen(!isHomeToolsOpen)}
            className="relative flex items-center gap-2 cursor-pointer menu"
          >
            <span>وسایل خانه</span>
            <IoIosArrowDown className="text-[10px]" />
            {isHomeToolsOpen && (
              <div className="absolute bg-white min-h-[300px] w-[1200px] -left-[950px] rounded-2xl shadow-sm top-full z-50">
                <HomeTools />
              </div>
            )}
          </div>
        
        
          <div
            onClick={() => setIsDigitalToolsOpen(!isDigitalToolsOpen)}
            className="relative flex items-center gap-2 cursor-pointer menu"
          >
            <span>لوازم دیجیتال</span>
            <IoIosArrowDown className="text-[10px]" />
            {isDigitalToolsOpen && (
              <div className="absolute bg-white h-[170px] w-[280px] left-1/2 transform -translate-x-1/2 rounded-xl shadow-sm flex items-center top-full z-50">
                <DigitalTools />
              </div>
            )}
          </div>
        
        <div className="flex items-center gap-2 cursor-pointer">
          <Link to="/personal"><span>درباره ما</span></Link>
        </div>
      </div>

      <div className="flex 2lg:hidden text-2xl text-gray-800 mr-5 cursor-pointer" onClick={() => setIsRightMenuOpen(!isRightMenuOpen)}>
        <TfiMenuAlt />
      </div>
      <div className="flex 2sm:hidden ml-4">
        <h1 className="text-[#6c7180] md:text-3xl sm:text-xl xs:text-lg font-[500]">
          <Link to="/"> کالا<span className="text-blue-600">مستر</span></Link>
        </h1>
      </div>
      {isRightMenuOpen && (
        <div className="fixed top-0 right-0 xs:w-[300px] lg:w-[400px] h-full bg-white shadow-lg z-20 2lg:hidden">
          <button
            onClick={() => setIsRightMenuOpen(false)}
            className="absolute flex lg:right-[360px] xs:right-[260px] p-1 bg-blue-500 text-white text-xl rounded-md top-5"
          >
            <RxCross2 />
          </button>
          <RightMenu />
        </div>
      )}

      <div className="hidden 2sm:flex 2lg:hidden items-center gap-5 text-gray-700 mb-2">
        <div className="relative rounded-xl cursor-pointer menu">
          <Link to="/cart">
            <PiBag className="flex items-center mx-auto sm:text-3xl xs:text-2xl mt-4" />
            <span className="sm:w-5 sm:h-5 xs:w-4 xs:h-4 -mt-3 bg-blue-600 rounded-full flex text-white items-center justify-center text-[10px]">
            {cart.length}
            </span>
          </Link>
        </div>
        <div className="bg-white relative flex items-center rounded-xl cursor-pointer">
          <TfiBell className="rotate-[35deg] mt-2 sm:text-3xl xs:text-2xl" />
          <span className="sm:w-[12px] sm:h-[12px] xs:w-[10px] xs:h-[10px] bg-blue-600 sm:mr-[8px] xs:mr-[6px] sm:mt-1 xs:mt-1.5 absolute rounded-full flex items-center justify-center"></span>
        </div>
        <div className="bg-white rounded-xl cursor-pointer">
          <Link to="/likes">
            <CiHeart className="flex items-center mx-auto sm:text-3xl xs:text-2xl mt-3" />
            <span className="w-4 h-4 -mt-3 bg-blue-600 rounded-full flex mr-2 text-white items-center justify-center text-[10px]">
            {likes.length}
            </span>
          </Link>
        </div>
        {user ? (
          <div
            onClick={() => setIsOpenUserMenu(!isOpenUserMenu)}
            className="relative w-[49px] h-[49px] rounded-xl flex items-center justify-center menu"
          >
            <FaUserCircle className="text-blue-600 cursor-pointer text-2xl mt-2 ml-5" />
            {isOpenUserMenu && (
              <div className="absolute top-10 left-1 mt-2 w-40 bg-white shadow-lg py-6 px-5 rounded-md z-20">
                <Link to="/account-details">
                  <div className="flex items-center pr-2 cursor-pointer gap-1 rounded-md w-full py-1.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white">
                    <HiUser />
                    <button className="text-[12px] flex items-center justify-center">
                      جزییات حساب
                    </button>
                  </div>
                </Link>
                <Link to="/personal">
                  <div className="flex items-center pr-4 cursor-pointer gap-2 rounded-md w-full py-1.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white">
                    <BsChatSquareText />
                    <button className="text-[12px] flex items-center justify-center">
                      درباره ما
                    </button>
                  </div>
                </Link>
                <Link to="/wallet">
                  <div className="flex items-center pr-4 cursor-pointer gap-2 rounded-md w-full py-1.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white">
                    <IoIosWallet />
                    <button className="text-[12px] flex items-center justify-center">
                      کیف پول
                    </button>
                  </div>
                </Link>
                <div
                  onClick={handleLogout}
                  className="flex items-center pr-2 cursor-pointer gap-1 rounded-md w-full py-1.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white"
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
            <div className="cursor-pointer">
              <FiUser className="text-blue-600 text-[29px] mt-2 ml-2" />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
