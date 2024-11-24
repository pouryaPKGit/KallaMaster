import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
         
          1460: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
         
          1197: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          
          

          524: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          357: {
            slidesPerView: 1,
            spaceBetween: 10,
          }
        }}
      >
        <SwiperSlide>
        <Link to="/product/1" >
            <div className='bg-white w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/MainSliderImages/455445.jpg" className='w-[176px] h-[176px] flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center m-auto text-sm text-gray-700 justify-center'>
                    <p>لپ تاپ 15.6 اینچ ایسوس مدل ROG Strix G15</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm'><del>45,000,000</del> تومان</span>
                        <span className='text-sm'>55,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >42%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/2">
            <div className='bg-white w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    
                </div>
                <div>
                    <img src="/Images/MainSliderImages/fgg4.jpg" className='w-[176px] h-[176px] flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center m-auto text-sm text-gray-700 justify-center'>
                    <p>لپ تاپ 15 اینچی اچ‌ پی مدل DW1536 NIA</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm'><del>65,000,000</del> تومان</span>
                        <span className='text-sm'>55,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >20%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/3">
            <div className='bg-white w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    
                  
                </div>
                <div>
                    <img src="/Images/MainSliderImages/43543.jpg" className='w-[176px] h-[176px] flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center m-auto text-sm text-gray-700 justify-center'>
                    <p>لپ تاپ 14.5 اینچی ایسوس مدل Zenbook 14X</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm'><del>15,000,000</del> تومان</span>
                        <span className='text-sm'>10,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >24%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/4">
            <div className='bg-white w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-blue-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/MainSliderImages/1-1.jpg" className='w-[176px] h-[176px] flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center mx-auto text-sm text-gray-700 justify-center mt-2'>
                    <p>گوشی موبایل شیائومی مدل Redmi Note 12 Pro Plus 5G</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm'><del>40,000,000</del> تومان</span>
                        <span className='text-sm'>25,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >85%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/5">
            <div className='bg-white w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/MainSliderImages/1-460x460.jpg" className='w-[176px] h-[176px] flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center mx-auto text-sm text-gray-700 justify-center mt-2'>
                    <p>گوشی موبایل اپل مدل آیفون 13 پرو مکس A2644 دو سیم‌ کارت</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm'><del>28,000,000</del> تومان</span>
                        <span className='text-sm'>25,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >19%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/6">
            <div className='bg-white w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/MainSliderImages/yujy.jpg" className='w-[176px] h-[176px] flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center mx-auto text-sm text-gray-700 justify-center mt-2'>
                    <p>گوشی موبایل سامسونگ مدل Galaxy A04 دو سیم کارت</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm'><del>4,000,000</del> تومان</span>
                        <span className='text-sm'>5,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >63%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
