import SliderSection from "../Components/SliderSection";
import AboutServices from "../Components/AboutServices";
import Middle4Images from "../Components/Middle4Images";
import TypewriterText from "../Components/TypewriterText"; 
import BestSealProducts from "../Components/BestSealProducts";
import MainSlider from "../Components/MainSlider"
import OffersPage from "../Components/OffersPage";
import UnderSliderSection from "../Components/UnderSliderSection";
import FooterSlider from "../Components/FooterSlider";
import FooterSection2Images from "../Components/FooterSection2Images";
import ItemAllBoxes from "../Components/ItemAllBoxes";
import OtherProducts from "../Components/OtherProducts";
import MainFooterSection from "../Components/MainFooterSection";
import { FcLike } from "react-icons/fc";
const MainPage = () => {
 
  return (
    <div className="bg-white">
      <SliderSection />
      <div className="sm:mt-64 xs:mt-20"> 
        <AboutServices />
      </div>
      <div className="mt-20">
        <Middle4Images />
      </div>
      <div className="flex justify-center mx-auto mt-20">
        <TypewriterText />
      </div>
      <div className="mt-20">
        <BestSealProducts/>
      </div>
      <div className="mt-20 bg-blue-600 h-[450px] mx-auto w-[100%] flex items-center">
        <div className="w-[90%] mx-auto py-3 flex gap-20">
            <div className="hidden 2md:flex">
                <OffersPage/>
            </div>
        <MainSlider/>
        </div>  
      </div>
        <div className="mt-20 flex items-center justify-center m-auto">
            <UnderSliderSection/>
        </div>
        
        <div className="flex items-center justify-center m-auto bg-slate-200 mt-32">
          <ItemAllBoxes/>
        </div>
        <div className="mt-20 bg-[#3b4359] h-[450px] mx-auto w-[100%] flex items-center">
        <div className="w-[90%] mx-auto py-3 flex gap-20">
        <FooterSlider/>
        <div className="hidden 2md:flex">
                <OffersPage/>
            </div>
        </div>  
      </div>
      <div className="mt-20">
        <FooterSection2Images/>
      </div>
      <div className="mt-20 w-[100%] md:px-32 xs:px-3 pt-10 bg-slate-100 mx-auto">
        <OtherProducts/>
      </div>
      <div className="bg-slate-100 pt-16 gap-2 flex items-center justify-start pr-32 text-2xl text-blue-500">
      <FcLike className="text-3xl" />
      <span className="font-semibold">علاقه مندی ها :</span>
      </div>
      <div className="pt-10 bg-slate-100 flex items-center justify-center m-auto">
        
            <UnderSliderSection/>
        </div>
      <div className="pt-20 bg-slate-100">
        <MainFooterSection/>
      </div>
    </div>
  );
};

export default MainPage;
