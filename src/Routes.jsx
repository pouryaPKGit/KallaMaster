import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import MainPage from "./Pages/MainPage";
import PersonalTools from "./Pages/PersonalTools";
import ProductDetail from "./Pages/ProductDetail";
import ContinuBuying from "./Components/ContinuBuying";
import Likes from "./Pages/Likes";
import AccountDetails from "./Components/AccountDetails";
import Wallet from "./Components/Wallet"
import CategoryProducts from "./Pages/CategoryProducts"
import HomeProducts from "./Pages/HomeProducts"
import DigitalProducts from "./Pages/DigitalProducts"
const Routes = [
  
  { path: '/login', element: <Login /> },
  { path: '/likes', element: <Likes /> },
  { path: '/cart', element: <Cart /> },
  { path: '/', element: <MainPage /> },  
  { path: '/personal', element: <PersonalTools /> },
  { path:"/product/:id", element: <ProductDetail />} ,
  { path:"/continuBuying", element: <ContinuBuying />} ,
  { path:"/account-details", element: <AccountDetails />} ,
  { path:"/wallet", element: <Wallet />} ,
  { path:"/categoryproducts", element: <CategoryProducts />} ,
  { path:"/homeproducts", element: <HomeProducts />} ,
  { path:"/digitalproducts", element: <DigitalProducts />} ,
  
];

export default Routes;
