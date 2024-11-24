
import CountdownTimer from "../Components/CountdownTimer"

const OffersPage = () => {
  const targetDate = new Date().setDate(new Date().getDate() + 2); 

  return (
    <div>
      <div className="bg-[#242a3c] w-[236px] h-[342px]  rounded-ss-[120px] rounded-se-[120px] rounded-e-[120px] rounded-es-[120px] rounded-xl duration-500 cursor-pointer">
        <div className="flex flex-col items-center">
          <img
            src="/Images/FooterSlider/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png"
            className="w-[141px] h-[141px] cursor-pointer mt-2"
            alt=""
          />
          <span className="bg-blue-600 text-white p-1 rounded-2xl text-sm -mt-5 z-0">
            فروش ویژه
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 mx-auto my-4 ">
                <p className="text-[14px] text-red-500">فروش ویژه موبایل</p>
                <p className="text-sm text-white bg-red-500 rounded-2xl px-2 py-0.5">زمان تخفیف</p>
        </div>
        <div className="text-center  "> 
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
