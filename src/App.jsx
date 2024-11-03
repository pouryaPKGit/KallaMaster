import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { useRoutes } from "react-router-dom";
import Routes from "./Routes";
import ScrollToTopButton from "./Components/ScrollToTopButton";

const App = () => {
  const router = useRoutes(Routes); 
  return (
      <div className="w-[100%] bg-[#f1f5f9] font-semibold overflow-x-hidden">
        <ScrollToTopButton/>
        <Navbar />
        <Header />
        {router}
      </div>
   
  );
}

export default App;
