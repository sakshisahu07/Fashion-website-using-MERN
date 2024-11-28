import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
const Checkout=()=>{
    const  myCard=useSelector((state)=>state.mycard.card)
    let sno=0;
    let totalAmount=0;
      const ans= myCard.map((key)=>{
  
          
          totalAmount+=key.price*key.qnty;
          sno++;
          return(
              <>
                 <tr>
                  <td>{sno} </td>
                  <td>
                   <img src={key.image} width="100" height="100" /> </td>
                  <td> {key.name} </td>
                  <td> {key.description} </td>
                  <td> {key.category} </td>
                  <td> {key.price} </td>
                  <td> 
                  
                        {key.qnty}
                    
  
                        
                      </td>
                  <td> 
                  
                      {key.price * key.qnty} 
                  
                  </td>
                  <td>
                     
                  </td>
                 </tr>
              
              </>
          )
      })
  
  
  
  

    return(

        <>
        <div id='payPage'>
            <div id='payForm'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Pincode</Form.Label>
        <Form.Control type="text"  />
      </Form.Group> <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Mobile No.</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
        <div id='payMethod'>
        <h1>Fill your Shipping Address</h1>
        

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th></th>
          <th> Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th> </th>


        </tr>
      </thead>
      <tbody>
        {ans}
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Net Amount</th>
            <th>{}TotalAmount</th>
        </tr>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            
        </tr>
        </tbody>
        </Table>
        </div>
        </div>
        </>
    )
}
export default Checkout;