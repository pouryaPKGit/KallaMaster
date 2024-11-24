import { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/Context";
import { CiSearch } from "react-icons/ci";
import { PiBag } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { TfiBell } from "react-icons/tfi";
import { FaPowerOff } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { BsChatSquareText } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

const Navbar = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const { user, logoutUser, cart,likes } = useContext(UserContext);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleLogout = () => {
    navigate("/");
    logoutUser();
    setIsOpenUserMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenUserMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between 2lg:gap-3 w-[100%] pt-7 mx-auto 2lg:px-10 xs:px-2">
      <div className="hidden 2sm:flex">
        <Link to="/">
          <h1 className="text-[#6c7180] md:text-3xl sm:text-xl xs:text-lg font-[500]">
            کالا<span className="text-blue-600">مستر</span>
          </h1>
        </Link>
      </div>
      <div className="items-center relative hidden 2sm:flex">
        <input
          type="text"
          placeholder="متن جستجو شما ..."
          className="outline-none pr-5 md:w-[460px] sm:w-[320px] h-[49px] bg-blue-100 rounded-xl placeholder:text-sm placeholder:py-1 placeholder:text-gray-500"
        />
        <CiSearch className="absolute left-2 text-2xl" />
      </div>
      <div className="hidden 2lg:flex items-center gap-2">
        <div
          onMouseEnter={() => setIsOpenCart(true)}
          onMouseLeave={() => setIsOpenCart(false)}
          className="relative bg-blue-600 text-white w-[49px] h-[49px] rounded-xl cursor-pointer"
        >
          <Link to="/cart">
            <PiBag className="flex items-center mx-auto text-2xl mt-3" />
            <span className="w-5 h-5 -mt-3 bg-white rounded-full flex mr-2 text-blue-600 items-center justify-center text-[10px]">
              {cart.length}
            </span>
          </Link>
        </div>
        <div className="bg-white relative flex items-center w-[49px] h-[49px] rounded-xl cursor-pointer">
          <TfiBell className="rotate-[35deg] mr-2 -mt-1 text-3xl" />
          <span className="w-[12px] h-[12px] bg-blue-600 mr-[17px] -mt-[4px] absolute rounded-full flex items-center justify-center"></span>
        </div>
        <div className="bg-white w-[49px] h-[49px] rounded-xl cursor-pointer">
          <Link to="/likes">
            <CiHeart className="flex items-center mx-auto text-3xl mt-3" />
            <span className="w-4 h-4 -mt-3 bg-blue-600 rounded-full flex mr-2 text-white items-center justify-center text-[10px]">
            {likes.length}
            </span>
          </Link>
        </div>
        {user ? (
          <div
            onClick={() => setIsOpenUserMenu(!isOpenUserMenu)} 
            className="relative bg-blue-600 text-white w-[49px] h-[49px] rounded-xl flex items-center justify-center cursor-pointer"
          >
            <FiUser className="text-white text-3xl" />
            {isOpenUserMenu && (
              <div
                ref={menuRef} 
                className="absolute top-10 -left-8 mt-2 w-40 bg-white shadow-lg py-6 px-5 rounded-md z-20"
              >
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
                  className="flex items-center pr-4 cursor-pointer gap-2 rounded-md w-full py-1.5 mt-2 hover:bg-blue-600 bg-gray-400 text-white"
                  onClick={handleLogout}
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
            <div className="flex items-center gap-3 justify-center w-[161px] h-[50px] bg-white rounded-xl cursor-pointer ml-3">
              <FiUser className="text-orange-400 text-2xl" />
              <span className="text-gray-500">ورود و عضویت</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
