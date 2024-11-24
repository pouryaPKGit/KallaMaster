import Swal from 'sweetalert2';

const UnderSliderSection = () => {
  const handleClick = () => {
    Swal.fire({
      icon: 'info',
      title: 'دسترسی محدود',
      text: 'فعلاً این بخش قابل دسترس نمی باشد.',
      confirmButtonText: 'باشه'
    });
  };
  return (
    <div className="flex flex-col gap-9 mx-auto justify-center items-center">
        <div className="flex flex-wrap items-center gap-5 justify-center px-5">
            <img src="/Images/UnderSectionSlider/w1.jpg" className="w-[630px] h-[250px] rounded-2xl hover:opacity-70 ursor-pointer" onClick={handleClick}  alt="" />
            <img src="/Images/UnderSectionSlider/w2.jpg" className="w-[630px] h-[250px] rounded-2xl hover:opacity-70 ursor-pointer" onClick={handleClick} alt="" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 ">
            <img src="Images/UnderSectionSlider/tt (1).jpg" alt="" className="w-[308px] h-[225px] rounded-2xl hover:opacity-70 cursor-pointer" onClick={handleClick} />
            <img src="Images/UnderSectionSlider/w2-1.jpg" alt="" className="w-[308px] h-[225px] rounded-2xl hover:opacity-70 cursor-pointer" onClick={handleClick}/>
            <img src="Images/UnderSectionSlider/w1-1.jpg" alt="" className="w-[308px] h-[225px] rounded-2xl hover:opacity-70 cursor-pointer" onClick={handleClick}/>
            <img src="Images/UnderSectionSlider/tt (1).jpg" alt="" className="w-[308px] h-[225px] rounded-2xl hover:opacity-70 cursor-pointer" onClick={handleClick}/>
        </div>
    </div>
  )
}

export default UnderSliderSection
