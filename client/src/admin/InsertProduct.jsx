import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const InsertProduct=()=>{
    return(
        <>
        <h1>Product are insered here!!!</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Category</Form.Label>
        <Form.Select aria-label="Default select example">
      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>
      </Form.Select>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </>
    )
}
export default InsertProduct;