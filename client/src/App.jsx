



import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import ShopProduct from "../pages/ShopProduct";
import Search from "../pages/Search";
import ProductDetail from "../pages/ProductDetail";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import CardData from "../pages/CardData";
import Checkout from "../pages/Checkout";
import MenCollections from "../pages/MensCollection";
import KidsCollections from "../pages/KidCollection";
import WoMenCollections from "../pages/WomenCollection";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="shoppro" element={<ShopProduct/>}/>
   
    <Route path="search" element={<Search/>}/>
    <Route path="prodetail" element={<ProductDetail/>}/>
    <Route path="men" element={<MenCollections/>} />
    <Route path="women" element={<WoMenCollections/>}/>
    <Route path="kids" element={<KidsCollections/>} />
    <Route path="carddata" element={<CardData/>}/>
    <Route path="checkout" element={<Checkout/>}/>

    </Route>
    </Routes>
    <Routes>
           <Route path="/admin" element={<AdminDashboard/>} >
             <Route path="insertpro" element={<InsertProduct/>}/>
           
           </Route>
        </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;
