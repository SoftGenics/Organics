import React,{useState, useEffect} from 'react'
import {Table, Container,  Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import axios from 'axios';
function ListOfAllDocter() {
  let s_number=0;
  const [GetData, SetPost] = useState([]);
  useEffect(() => {

    const fetchPosts = async () =>{
      const res = await axios.get("http://localhost:5000/api/allProduct");
      SetPost(res.data)
    }
    fetchPosts();
  },[]);

  const deleteProduct = async id => {
    await axios.delete(`http://localhost:5000/api/deleteProduct/${id}`)
  }
  return (
      <>
     
      <Container className='mt-5'>
        <h1 className='text-center mb-3'>List of <span style={{color:'#3bc0fd'}}> Products by Category</span></h1>
        <Table striped bordered hover className='table border shadow text-center mt-5'responsive="sm" >
          <thead>
            <tr>
              <th>Id</th>
              <th>Image of Product</th>
              <th>Product Name</th>
              <th>Product Price</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
            { GetData.map((getData) =>{
      

      
      return(
          <>
            <tr>
              <td>{s_number=s_number+1}</td>
              <td><img src={`http://localhost:5000/uploads/${getData.product_img}`} alt="img" height={50}/></td>
              <td>{getData.product_name}</td>
              <td>{getData.product_price}</td>
              <td>
                
              <Link to={`/ViewProduct/${getData.id}`} className='btn btn-primary  mx-3'>View &nbsp;&nbsp;<i className="far fa-eye"></i></Link>
              </td>
              
              <td>
                
                <Button className='btn btn-danger' onClick={() => deleteProduct(getData.id)} >Delete </Button>
              </td>

            </tr>
           
          </>
              )

        }
      )}
          </tbody>
        </Table>

        </Container>

      </>
  )
}

export default ListOfAllDocter
