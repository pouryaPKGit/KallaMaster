import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const images = [
    '/Images/Slider/Untitled-1.jpg022.jpg',
    '/Images/Slider/Untitled-1.jpg021.jpg'
  ];

  useEffect(() => {
 
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         
          <img src={images[currentImageIndex]} className='rounded-[100px] m-auto' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/Slider/Untitled-1.jpg2.jpg" className='rounded-[100px] m-auto' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Images/Slider/Untitled-1.jpg1.jpg" className='rounded-[100px] m-auto' alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
