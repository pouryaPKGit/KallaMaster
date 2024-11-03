import Swal from 'sweetalert2';

const Middle4Images = () => {
  const handleClick = () => {
    Swal.fire({
      icon: 'info',
      title: 'دسترسی محدود',
      text: 'فعلاً این بخش قابل دسترس نمی باشد.',
      confirmButtonText: 'باشه'
    });
  };

  return (
    <div className="flex flex-wrap gap-y-5 gap-x-3 justify-center mx-auto sm:px-32">
      <img
        src="/Images/MiddleImages/tt.jpg"
        className="w-[300px] h-[225px] rounded-2xl cursor-pointer hover:opacity-60"
        alt=""
        onClick={handleClick}
      />
      <img
        src="/Images/MiddleImages/w3.jpg"
        className="w-[300px] h-[225px] rounded-2xl cursor-pointer hover:opacity-60"
        alt=""
        onClick={handleClick}
      />
      <img
        src="/Images/MiddleImages/w1-1.jpg"
        className="w-[300px] h-[225px] rounded-2xl cursor-pointer hover:opacity-60"
        alt=""
        onClick={handleClick}
      />
      <img
        src="/Images/MiddleImages/tyu.jpg"
        className="w-[300px] h-[225px] rounded-2xl cursor-pointer hover:opacity-60"
        alt=""
        onClick={handleClick}
      />
    </div>
  );
};

export default Middle4Images;
