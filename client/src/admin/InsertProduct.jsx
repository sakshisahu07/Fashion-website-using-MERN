import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InsertProduct=()=>{
  const [input,setInput]=useState({});
  const [myimage,setMyimage]=useState()

  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values,[name]:value}));
  }
  const handleImage=(e)=>{
    setMyimage(e.target.files[0]);
    console.log(myimage);
  }
  const handleSubmit=()=>{

    
  }
    return(
        <>
        <h1>Product are insered here!!!</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"  name='description' value={input.description} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Category</Form.Label>
        <Form.Select aria-label="Default select example" name='category' value={input.category} onChange={handleInput}  >
      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>
      </Form.Select>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="email" name='price' value={input.price} onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" name='file'  onChange={handleImage}  />
      </Form.Group>

     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

        </>
    )
}
export default InsertProduct;