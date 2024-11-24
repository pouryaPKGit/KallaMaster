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
        <Link to="/product/4" >
            <div className='bg-[#242a3c] w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-blue-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/MainSliderImages/1-1.jpg" className='w-[176px] h-[176px] rounded-2xl flex items-center justify-center m-auto -mt-7' alt="" />
                </div>
                <div className='flex px-3 items-center mx-auto text-sm text-white justify-center mt-2'>
                    <p>گوشی موبایل شیائومی مدل Redmi Note 12 Pro Plus 5G</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm text-white'><del>40,000,000</del> تومان</span>
                        <span className='text-sm text-white'>25,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >85%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/5" >
            <div className='bg-[#242a3c] w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/MainSliderImages/1-460x460.jpg" className='w-[176px] h-[176px] rounded-2xl flex items-center justify-center m-auto -mt-7' alt="" />
                </div>
                <div className='flex px-3 items-center mx-auto text-sm text-white justify-center mt-2'>
                    <p>گوشی موبایل اپل مدل آیفون 13 پرو مکس A2644 دو سیم‌ کارت</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm text-white'><del>28,000,000</del> تومان</span>
                        <span className='text-sm text-white'>25,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >19%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/6" >
            <div className='bg-[#242a3c] w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/MainSliderImages/yujy.jpg" className='w-[176px] h-[176px] rounded-2xl flex items-center justify-center m-auto -mt-7' alt="" />
                </div>
                <div className='flex px-3 items-center mx-auto text-sm text-white justify-center mt-2'>
                    <p>گوشی موبایل سامسونگ مدل Galaxy A04 دو سیم کارت</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm text-white'><del>4,000,000</del> تومان</span>
                        <span className='text-sm text-white'>5,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >63%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/7" >
            <div className='bg-[#242a3c] w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                </div>
                <div>
                    <img src="/Images/FooterSlider/12-768x768.jpg" className='w-[176px] h-[176px] rounded-2xl flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center m-auto text-sm text-white justify-center'>
                <p>هدفون بی سیم سونی مدل WH-1000XM4 بدون رنگ</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm text-white'><del>45,000,000</del> تومان</span>
                        <span className='text-sm text-white'>55,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >42%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide> 
        <Link to="/product/8" >
            <div className='bg-[#242a3c] w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-gray-500 rounded-full'></span>
                    
                </div>
                <div>
                    <img src="/Images/FooterSlider/13-768x768.jpg" className='w-[176px] h-[176px] rounded-2xl flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center m-auto text-sm text-white justify-center'>
                <p>هدفون بی سیم سونی مدل WH-1000XM4 بدون رنگ</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm text-white'><del>65,000,000</del> تومان</span>
                        <span className='text-sm text-white'>55,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >20%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/9" >
            <div className='bg-[#242a3c] w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    
                  
                </div>
                <div>
                    <img src="/Images/FooterSlider/14-460x460.jpg" className='w-[176px] h-[176px] rounded-2xl flex items-center justify-center m-auto mt-2' alt="" />
                </div>
                <div className='flex px-3 items-center m-auto text-sm text-white justify-center'>
                <p>هدفون بی سیم سونی مدل WH-1000XM4 بدون رنگ</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm text-white'><del>15,000,000</del> تومان</span>
                        <span className='text-sm text-white'>10,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >24%</span>
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/product/10" >
            <div className='bg-[#242a3c] w-[236px] h-[342px] rounded-xl hover:rounded-[40px] duration-500 cursor-pointer'>
                <div className='flex flex-col gap-1 pt-5 pr-2'>
                    <span className='flex w-2.5 h-2.5 bg-red-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-blue-500 rounded-full'></span>
                    <span className='flex w-2.5 h-2.5 bg-pink-500 rounded-full'></span>
                    
                  
                </div>
                <div>
                    <img src="/Images/FooterSlider/1100228.jpg" className='w-[176px] h-[176px] rounded-2xl flex items-center justify-center m-auto -mt-5' alt="" />
                </div>
                <div className='flex px-3 items-center m-auto text-sm text-white justify-center'>
                    <p>هدفون بی سیم سونی مدل WH-1000XM4 بدون رنگ</p>
                </div>
                <div className='flex justify-between pr-3'>
                    <div className='flex flex-col items-start gap-0.5 mt-5'>
                        <span className='text-sm text-white'><del>15,000,000</del> تومان</span>
                        <span className='text-sm text-white'>10,000,000 تومان</span>
                    </div>
                    <div className='pl-3 pt-8'>
                        <span className='text-white bg-blue-600 rounded-xl  px-1.5 py-0.5 text-sm' >24%</span>
                        
                    </div>
                </div>
            </div>
            </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
