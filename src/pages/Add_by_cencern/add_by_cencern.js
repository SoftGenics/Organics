import React, {useState} from 'react';
import { Form,FormControl ,FormGroup,FormLabel,Button,Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function AddByconcern() {
  

    return (
        <div> 
            <h1>Add Product Concern</h1>
            <Form action='http://localhost:5000/api/addCProduct' method='POST' enctype="multipart/form-data" horizontal className="shadow-lg p-3 mb-5 bg-white rounded" >
     
    <Form.Label>Enter Product Name</Form.Label>
                      <Form.Control type="text" className="form-control" name="product_name" placeholder="Name of Product.."  required/>
                      <Form.Label>Enter Product Price</Form.Label>
                      <Form.Control type="text" className="form-control" name="product_price" placeholder="Price of Product..."  required/>
   
    <Form.Group as={Row}>
      
    <FormLabel>Select Product Image </FormLabel>
        <Form.File
          type="file" name="product_img"
          className="custom-file-label  mt-4"
          id="inputGroupFile01"
          custom
        />
     
      </Form.Group>
      <FormGroup controlId="formControlsTextarea">
      <FormLabel>Enter Discription About Product </FormLabel>

      <FormControl componentClass="textarea" name="product_disc" placeholder="You can write here your Message.." />
    



    
    </FormGroup>
    <Form.Label>Select Category</Form.Label>
    
    

<select name="product_category" id="cars">
 
  <option value="Digestion">Digestion</option>
  <option value="GlutenFree">Gluten free</option>
 <option value="Diabetes">Diabetes</option>
  <option value="ChildCare">Child Care</option>
 <option value="Vegan">Vegan</option>



 
</select>
<div><Form.Label>Select Vitamins </Form.Label>
    
    

    <select name="vitamins" id="cars">
     
      <option value="Vitamin A">Vitamin A</option>
      <option value="B">Vitamin B1</option>
     <option value="B2">Vitamin B2</option>
     <option value="B3">Vitamin B3</option>
     <option value="C">Vitamin C</option>
      <option value="D">Vitamin D</option>
     <option value="E">Vitamin E</option>
     <option value="V">Vitamin K</option>
    
    
    
     
    </select></div>
                                      
  <div>
    <Button className="btn btn-primary mt-2 ml-2" type="submit">Submit</Button>
  </div>
  </Form>
        </div>
        );
      }


export default AddByconcern;
