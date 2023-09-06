import axios from "axios";
import {useState, useEffect} from "react"; 
import { ProductsIndex } from "./ProductsIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { ProductsNew } from "./ProductsNew";
import { ProductShow } from "./ProductShow";
import { Modal } from "./Modal"; 


export function Content() {
  const [products, setProducts] = useState([]); 
  const [isProductShowVisible, setIsProductShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({}); 

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then ((response) => {
      console.log(response.data); 
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params); 
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products,response.data]); 
      successCallback();
    }); 
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductShowVisible(true); 
    setCurrentProduct(product); 
  }; 

  const handleClose = () => {
    console.log("handleClose"); 
    setIsProductShowVisible(false); 
  };

  useEffect(handleIndexProducts, []); 

 

  return (
    <div>
      <Signup />
      <Login />
      <ProductsNew onCreateProduct={handleCreateProduct}/>
      <ProductsIndex products={products} onShowProduct={handleShowProduct} />
      <Modal show={isProductShowVisible} onClose={handleClose}>
      <ProductShow product={currentProduct}/> 
      </Modal>
      <LogoutLink />
    </div>
  );
}