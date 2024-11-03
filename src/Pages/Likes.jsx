import  { useContext } from 'react';
import { UserContext } from '../Context/Context';
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainFooterSection from "../Components/MainFooterSection"
import { FaRegTrashCan } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
const Likes = () => {
  
  const { removeFromLikes, likes,addToCart } = useContext(UserContext);

  const handleRemoveClick = (product) => {
    removeFromLikes(product);
    
  };
  const handleAddToCartClick = (product) => {
    addToCart(product);
  };

  return (
    <>
    <div className='mb-10'>
      
      {likes.length === 0 ? (
        <div className='flex flex-col items-center'>
       <img src="/Images/newimages/Untitled-1.pngwqs.png" className="flex items-center justify-center sm:w-[500px] xs:w-[350px] mx-auto " alt="" />
       <p className="flex items-center justify-center -mt-20 text-blue-600 text-2xl">هیچ محصول مورد علاقه یافت نشد</p>
       </div>
      ) : (
        <div className='flex items-center justify-center mt-10'>
        <ul className="space-y-4">
          {likes.map((product, index) => (
            <li key={index} className="flex justify-between items-center p-4 bg-white xl:w-[1200px] lg:w-[900px] sm:w-[500px] xs:w-[400px] shadow-md rounded-lg">
              <div className="flex gap-5">
                <div>
                  <img src={product.image || 'default-image.jpg'} className="sm:w-[100px] xs:w-[80px] xs:h-[80px] sm:h-[100px]" alt="" />
                </div>
                <div>
                  <h2 className="text-md text-blue-400">{product.name || 'نام محصول'}</h2>
                  <p className="pt-5 text-sm text-gray-600">قیمت: {product.price || 'قیمت نا معلوم'} تومان</p>
                 
                </div>
              </div>
              <div className='flex gap-4'>
              <div className="bg-gray-200 rounded-full w-[45px] h-[45px] flex items-center justify-center">
              <button
                onClick={() => handleRemoveClick(product)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaRegTrashCan className="text-2xl" />
              </button>
              
              </div>
              <button  onClick={() => handleAddToCartClick(product)} className='text-blue-600 bg-gray-100 rounded-full p-3 hover:opacity-75'><FaBasketShopping className='text-2xl' /></button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      )}
      <ToastContainer />
    </div>
    
    <MainFooterSection/>
    </>
  );
}

export default Likes;
