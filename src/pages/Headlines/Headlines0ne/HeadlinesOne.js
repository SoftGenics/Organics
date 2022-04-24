import React, {useState} from 'react';
import { Form,FormControl ,FormGroup,FormLabel,Button,Row} from "react-bootstrap";
import { useHistory } from "react-router-dom";

function HeadlinesOne() {
  

    return (
        <div> 
          <h1>Add Product By Category</h1>
            <Form action='http://localhost:5000/api/addProduct' method='POST' enctype="multipart/form-data" horizontal className="shadow-lg p-3 mb-5 bg-white rounded" >
     
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
      <FormLabel>Enter Discription about Product </FormLabel>

      <FormControl componentClass="textarea" name="product_disc" placeholder="You can write here your Message.." />
    



    
    </FormGroup>
    <Form.Label>Select Category</Form.Label>
    
    

<select name="product_category" id="cars">
  <option value="Cooking&Essential">Cooking Essentials</option>
  <option value="DryFruits&Superfoods">Dry Fruits and Superfoods</option>
 <option value="Honey&Spreads">Honey and Spreads</option>
  <option value="Dairy&Cheese">Dairy and Cheese</option>
 <option value="Breakfast&Snacks">Breakfast and Snacks</option>
 <option value="TeaCoffee&Breverages">Tea Coffee and Breverages</option>

</select>
                                      
  <div>
    <Button className="btn btn-primary mt-2 ml-2" type="submit">Submit</Button>
  </div>
  </Form>
        </div>
        );
      }


export default HeadlinesOne;
