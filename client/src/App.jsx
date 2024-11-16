



import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Search from "../pages/Search";
import Contact from "../pages/Contact";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";


const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="product" element={<Product/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path="contact" element={<Contact/>}/>

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
