import Swal from 'sweetalert2';

const FooterSection2Images = () => {
  const handleClick = () => {
    Swal.fire({
      icon: 'info',
      title: 'دسترسی محدود',
      text: 'فعلاً این بخش قابل دسترس نمی باشد.',
      confirmButtonText: 'باشه'
    });
  };
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 px-5">
      <img src="/Images/Footer2images/er1.jpg" className="w-[630px] h-[250px] rounded-2xl cursor-pointer hover:opacity-70" alt="" onClick={handleClick} />
      <img src="/Images/Footer2images/er2.jpg" className="w-[630px] h-[250px] rounded-2xl cursor-pointer hover:opacity-70" alt="" onClick={handleClick} />
    </div>
  )
}

export default FooterSection2Images
