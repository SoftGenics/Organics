import React, { useEffect, useState } from 'react'
// import Products from '../components/Products/Products';
import axios from 'axios';
import './Style.css'
import { Card, Row , Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsPage = () => {
  const [product, SetProduct] = useState([]);
  useEffect(() => {

    const fetchPosts = async () =>{
      const res = await axios.get("http://localhost:5000/api/allProduct");
      SetProduct(res.data)
    }
    fetchPosts();
  },[]);

  return (
    <>
<Container className='mt-3 cooking'>
  <h1 className='text-center'>Cooking Essential</h1>
     
      {product.map((item)=>{
        if(item.product_category=="Cooking&Essential"){
        
        return(
        
        <>
        
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          

      </>)}
      })}

</Container>
    </>
  )
};

export default ProductsPage;