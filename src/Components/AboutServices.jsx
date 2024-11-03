
const AboutServices = () => {
  return (
    <div className="flex flex-wrap gap-28 m-auto  justify-center">

      <div className="flex items-center gap-5">
        <img src="/Images/AboutServices/free-delivery.png" className="w-[53px] h-[53px]" alt="" />
        <div className="flex flex-col gap-1">
            <span className="text-lg">ارسال رایگان</span>
            <span className="text-sm text-gray-600">بدون محدودیت قیمت</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src="/Images/AboutServices/24-hours.png" className="w-[53px] h-[53px]" alt="" />
        <div className="flex flex-col gap-1">
            <span className="text-lg">پشتیبانی حرفه ای</span>
            <span className="text-sm text-gray-600">24 ساعت و 7 روز هفته</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src="/Images/AboutServices/checked.png" className="w-[53px] h-[53px]" alt="" />
        <div className="flex flex-col gap-1">
            <span className="text-lg">اصالت کالا</span>
            <span className="text-sm text-gray-600">تضمین برگشت پول</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <img src="/Images/AboutServices/secure-payment.png"  className="w-[53px] h-[53px]" alt="" />
        <div className="flex flex-col gap-1">
            <span className="text-lg">امنیت در خرید</span>
            <span className="text-sm text-gray-600">کارت های عضو شتاب</span>
        </div>
      </div>

    </div>
  )
}

export default AboutServices
