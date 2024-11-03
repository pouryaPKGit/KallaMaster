import Swal from 'sweetalert2';
const BestSealProducts = () => {
  const handleClick = () => {
    Swal.fire({
      icon: 'info',
      title: 'دسترسی محدود',
      text: 'فعلاً این بخش قابل دسترس نمی باشد.',
      confirmButtonText: 'باشه'
    });
  };
  return (
    <div className="flex flex-wrap gap-x-28 gap-y-10 items-center justify-center m-auto sm:px-44">
      <div className="flex flex-col items-center" onClick={handleClick}>
        <img src="/Images/BestSealsProducts/5795b31a635f1e23df96a908c009f31744ede38f_1656160928-150x150.png" className="w-[141px] h-[141px] hover:blur-[2px] cursor-pointer" alt="" />
        <span className="bg-yellow-950 text-white p-1 rounded-2xl text-sm -mt-5 z-0">530+ محصول</span>
        <span>کیف و کفش</span>
      </div>
      <div className="flex flex-col items-center" onClick={handleClick}>
        <img src="/Images/BestSealsProducts/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119-150x150.png" className="w-[141px] h-[141px] hover:blur-[2px] cursor-pointer" alt="" />
        <span className="bg-yellow-500 text-white p-1 rounded-2xl text-sm -mt-5 z-0">180+ محصول</span>
        <span>وسایل آشپزخانه</span>
      </div>
      <div className="flex flex-col items-center" onClick={handleClick}>
        <img src="/Images/BestSealsProducts/af02140ea60e0fd478b09b279976a095c95615b6_1656161174-150x150.png" className="w-[141px] h-[141px] hover:blur-[2px] cursor-pointer" alt="" />
        <span className="bg-blue-600 text-white p-1 rounded-2xl text-sm -mt-5 z-0">65+ محصول</span>
        <span>صنایع دستی</span>
      </div>
      <div className="flex flex-col items-center" onClick={handleClick}>
        <img src="/Images/BestSealsProducts/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730-150x150.png" className="w-[141px] h-[141px] hover:blur-[2px] cursor-pointer" alt="" />
        <span className="bg-red-600 text-white p-1 rounded-2xl text-sm -mt-5 z-0">20+ محصول</span>
        <span>ابزار الات</span>
      </div>
      <div className="flex flex-col items-center" onClick={handleClick}>
        <img src="/Images/BestSealsProducts/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265-150x150.png" className="w-[141px] h-[141px] hover:blur-[2px] cursor-pointer" alt="" />
        <span className="bg-green-700 text-white p-1 rounded-2xl text-sm -mt-5 z-0">230+ محصول</span>
        <span>هدفون و ساعت</span>
      </div>
    </div>
  )
}

export default BestSealProducts
